import React from 'react';
import MartketPlace4TopCategories from '~/components/partials/homepage/marketplace4/MartketPlace4TopCategories';
import MarketPlaceSeasonalCampaign from '~/components/partials/homepage/marketplace/MarketPlaceSeasonalCampaign';
import MarketPlaceGiftAndBundles from '~/components/partials/homepage/marketplace/MarketPlaceGiftAndBundles';
import MarketPlaceNewCollection from '~/components/partials/homepage/marketplace/MarketPlaceNewCollection';
import MarketPlacePopularProducts from '~/components/partials/homepage/marketplace/MarketPlacePopularProducts';
import MarketPlacePopularSeller from '~/components/partials/homepage/marketplace/MarketPlacePopularSeller';
import MarketPlaceTestimonials from '~/components/partials/homepage/marketplace/MarketPlaceTestimonials';
import MarketPlaceHomeBanner from '~/components/partials/homepage/marketplace/MartketPlaceHomeBanner';
import MarketPlaceSiteFeatures from '~/components/partials/homepage/marketplace/MarketPlaceSiteFeatures';
import MarketPlaceDealOfDay from '~/components/partials/homepage/marketplace/MarketPlaceDealOfDay';
import Newsletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';
import MarketPlacePromotionHeader from '~/components/partials/homepage/marketplace/MarketPlacePromotionHeader';
import HeaderMarketPlace from '~/components/shared/headers/HeaderMarketPlace';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';

const HomeMarketPlacePage = () => {
    const headers = (
        <>
            <MarketPlacePromotionHeader />
            <HeaderMarketPlace />
            <HeaderMobile />
        </>
    );
    return (
        <PageContainer header={headers} title="Home Market Place">
            <main id="homepage-3">
                <MarketPlaceHomeBanner />
                <MarketPlaceSiteFeatures />
                <MartketPlace4TopCategories />
                <MarketPlaceDealOfDay collectionSlug="deal-of-the-day" />
                <MarketPlaceSeasonalCampaign collectionSlug="deal-of-the-day" />
                <MarketPlaceGiftAndBundles collectionSlug="deal-of-the-day" />
                <MarketPlaceNewCollection collectionSlug="deal-of-the-day" />
                <MarketPlacePopularProducts
                    collectionSlug="deal-of-the-day"
                    title="Popular Products"
                />
                <MarketPlacePopularSeller />
                <MarketPlaceTestimonials />
                <Newsletters />
            </main>
        </PageContainer>
    );
};
export default HomeMarketPlacePage;
