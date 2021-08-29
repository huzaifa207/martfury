import React, { useState, useEffect, useRef, memo } from "react";
import PropTypes from "prop-types";
import {
  request,
  HeaderNav,
  LoadingIndicator,
  PluginHeader,
} from "strapi-helper-plugin";
import { Select, Label } from "@buffetjs/core";
import { get, has, isEmpty, pickBy, set } from "lodash";

import UploadFileForm from "../../components/UploadFileForm";
import Row from "../../components/Row";
import Block from "../../components/Block";
import pluginId from "../../pluginId";

const getUrl = (to) =>
  to ? `/plugins/${pluginId}/${to}` : `/plugins/${pluginId}`;

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [modelOptions, setModelOptions] = useState([]);
  const [models, setModels] = useState([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [importSource, setImportSource] = useState("upload");
  const [selectedContentType, setSelectedContentType] = useState("");
  const analysisConfig = useRef(null);

  const importSources = [
    { label: "External URL ", value: "url" },
    { label: "Upload file", value: "upload" },
    { label: "Raw text", value: "raw" },
  ];

  const selectImportSource = (_importSource) => {
    setImportSource(_importSource);
  };

  const selectSelectedContentType = (_selectedContentType) => {
    setSelectedContentType(_selectedContentType);
  };

  const onRequestAnalysis = async (configuration) => {
    setAnalyzing(true);
    analysisConfig.current = configuration;
    try {
      const response = await request("/import-content/preAnalyzeImportFile", {
        method: "POST",
        body: configuration,
      });
      setAnalysis(response);
      setAnalyzing(false);
      strapi.notification.success("Analyed successfully!");
    } catch (e) {
      setAnalyzing(false);
      strapi.notification.error(`Analyze Failed, try again`);
      strapi.notification.error(`${e}`);
    }
  };

  const getModels = async () => {
    setLoading(true);
    try {
      const response = await request("/content-type-builder/content-types", {
        method: "GET",
      });

      // Remove non-user content types from models
      const models = get(response, ["data"], []).filter(
        (obj) => !has(obj, "plugin")
      );
      const modelOptions = models.map((model) => {
        return {
          label: get(model, ["schema", "name"], ""), // (name is used for display_name)
          value: model.uid, // (uid is used for table creations)
        };
      });

      setLoading(false);

      return { models, modelOptions };
    } catch (e) {
      setLoading(false);
      strapi.notification.error(`${e}`);
    }
    return [];
  };

  useEffect(() => {
    getModels().then((res) => {
      const { models, modelOptions } = res;
      setModels(models);
      setModelOptions(modelOptions);
      let _modelOption = modelOptions ? modelOptions[0].value : "";
      setSelectedContentType(_modelOption);
    });
  }, []);

  return (
    <div className={"container-fluid"} style={{ padding: "18px 30px" }}>
      <PluginHeader
        title={"Import Content"}
        description={"Import CSV and RSS-Feed into your Content Types"}
      />
      <HeaderNav
        links={[
          {
            name: "Import Data",
            to: getUrl(""),
          },
          {
            name: "Import History",
            to: getUrl("history"),
          },
        ]}
        style={{ marginTop: "4.4rem" }}
      />
      <div className="row">
        <Block
          title="General"
          description="Configure the Import Source & Destination"
          style={{ marginBottom: 12 }}
        >
          <Row className={"row"}>
            <div className={"col-4"}>
              <Label htmlFor="importSource">Import Source</Label>
              <Select
                name="importSource"
                options={importSources}
                value={importSource}
                onChange={(e) => selectImportSource(e.target.value)}
              />
            </div>
            <div className={"col-4"}>
              <Label htmlFor="importDest">Import Destination</Label>
              <Select
                value={selectedContentType}
                name="importDest"
                options={modelOptions}
                onChange={(e) => selectSelectedContentType(e.target.value)}
              />
            </div>
          </Row>
          <UploadFileForm
            onRequestAnalysis={onRequestAnalysis}
            loadingAnalysis={analyzing}
          />
        </Block>
      </div>
    </div>
  );
};

export default memo(HomePage);
