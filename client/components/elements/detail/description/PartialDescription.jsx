import React from 'react';
import ReactMarkdown from 'react-markdown';

import { baseUrl } from '~/repositories/Repository';

const PartialDescription = ({ description }) => (
    <div className="ps-document">
        <ReactMarkdown
            children={description}
            transformImageUri={(uri) =>
                uri.startsWith('http') ? uri : `${baseUrl}${uri}`
            }
        />
    </div>
);

export default PartialDescription;
