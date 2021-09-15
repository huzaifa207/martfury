import React from 'react';
import Link from 'next/link';

import FooterDefault from '../components/shared/footers/FooterDefault';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import PageContainer from '~/components/layouts/PageContainer';
import HeaderMarketPlace from '~/components/shared/headers/HeaderMarketPlace';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';

function Error({ statusCode }) {
    const headers = (
        <>
            <HeaderMarketPlace />
            <HeaderMobile />
        </>
    );
    return (
        <PageContainer header={headers} title="Error 404">
            <div className="site-content">
                <div className="ps-page--404">
                    <div className="container">
                        <div className="ps-section__content">
                            <figure>
                                <img src="/static/img/404.jpg" alt="" />
                                <h3>Ohh! Page not found</h3>
                                <p>
                                    It seems we can't find what you're looking
                                    for. <br />
                                    Go back to
                                    <Link href="/">
                                        <a> Homepage</a>
                                    </Link>
                                </p>
                            </figure>
                        </div>
                    </div>
                </div>
                <FooterDefault />
            </div>
        </PageContainer>
    );
}

export default Error;
