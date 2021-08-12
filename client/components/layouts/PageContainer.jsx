import React from 'react';
import Head from 'next/head';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';

// headers
import HeaderMarketPlace from '~/components/shared/headers/HeaderMarketPlace';
// import HeaderMobile from '~/components/shared/headers/HeaderMobile';

const initHeaders = (
    <>
        {/* <HeaderDefault />
        <HeaderMobile /> */}

        <HeaderMarketPlace />
        <HeaderMobile />
    </>
);
const initFooters = (
    <>
        <FooterFullwidth />
    </>
);

const PageContainer = ({
    header = initHeaders,
    footer = initFooters,
    children,
    title = 'Page',
}) => {
    let titleView;

    if (title !== '') {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <>
            <Head>
                <title>{titleView}</title>
            </Head>
            {header}
            {children}
            {footer}
        </>
    );
};

export default PageContainer;
