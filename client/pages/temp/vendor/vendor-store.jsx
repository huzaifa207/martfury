import React from 'react';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Newletters from '~/components/partials/commons/Newletters';
import VendorStore from '~/components/partials/vendor/VendorStore';
import PageContainer from '~/components/layouts/PageContainer';

const VendorStorePage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Vendor store',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="Vendor store">
            <div className="ps-page--single ps-page--vendor">
                <BreadCrumb breacrumb={breadCrumb} />
                <VendorStore />
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default VendorStorePage;
