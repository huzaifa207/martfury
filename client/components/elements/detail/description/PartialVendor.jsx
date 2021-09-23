import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { baseUrl } from '~/repositories/Repository';

const PartialVendor = ({ store }) => {
    const { store_name, description } = store;

    return (
        <section>
            <h4>{store_name}</h4>
            <ReactMarkdown
                children={description}
                transformImageUri={(uri) =>
                    uri.startsWith('http') ? uri : `${baseUrl}${uri}`
                }
            />
            <a href="#">More Products from {store_name}</a>
        </section>
    );
};

export default PartialVendor;
