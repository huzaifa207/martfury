/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import { get, upperFirst } from "lodash";
import { auth } from "strapi-helper-plugin";
import PageTitle from "../../components/PageTitle";

import useFetch from "./hooks";
import { Block, Container, Separator } from "./components";

const HomePage = ({ global: { plugins }, history: { push } }) => {
  const { error, isLoading, posts } = useFetch();

  const hasAlreadyCreatedContentTypes =
    get(
      plugins,
      ["content-manager", "leftMenuSections", "0", "links"],
      []
    ).filter((contentType) => contentType.isDisplayed === true).length > 1;

  const headerId = hasAlreadyCreatedContentTypes
    ? "HomePage.greetings"
    : "app.components.HomePage.welcome";
  const username = get(auth.getUserInfo(), "username", "");

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {(title) => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <FormattedMessage
                id={headerId}
                values={{
                  name: upperFirst(username),
                }}
              >
                {(msg) => (
                  <h1 id="mainHeader">{"Welcome to the Dashboard!"}</h1>
                )}
              </FormattedMessage>
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />

              <FormattedMessage
                id="desc"
                values={{
                  name: upperFirst(username),
                }}
              >
                {(msg) => (
                  <h4 id="content">
                    {
                      "All the information related to the Backend will be displayed here. Graphs and other Performance related information will be displayed here too."
                    }
                  </h4>
                )}
              </FormattedMessage>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
