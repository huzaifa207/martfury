import React from 'react';

import { Tabs } from 'antd';
import PartialDescription from '~/components/elements/detail/description/PartialDescription';
import PartialSpecification from '~/components/elements/detail/description/PartialSpecification';
import PartialVendor from '~/components/elements/detail/description/PartialVendor';
import PartialReview from '~/components/elements/detail/description/PartialReview';
import PartialOffer from '~/components/elements/detail/description/PartialOffer';
import PartialQuestions from './PartialQuestions';

const { TabPane } = Tabs;

const DefaultDescription = ({ product }) => {
    const { description, specification, store, reviews, review } = product;
    return (
        <div className="ps-product__content ps-tab-root">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Description" key="1">
                    <PartialDescription description={description} />
                </TabPane>
                <TabPane tab="Specification" key="2">
                    <PartialSpecification specification={specification} />
                </TabPane>
                <TabPane tab="Vendor" key="3">
                    <PartialVendor store={store} />
                </TabPane>
                <TabPane tab="Reviews (1)" key="4">
                    <PartialReview reviews={reviews} review={review} />
                </TabPane>
                <TabPane tab="Questions and Answers" key="5">
                    <PartialQuestions />
                </TabPane>
                <TabPane tab="More Offers" key="6">
                    <PartialOffer />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default DefaultDescription;
