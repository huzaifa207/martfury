// import React from 'react';
// import PageContainer from '~/components/layouts/PageContainer';
// import MartketPlace3Banner from '~/components/partials/homepage/marketplace3/MartketPlace3Banner';
// import MarketPlace3SearchTrending from '~/components/partials/homepage/marketplace3/MarketPlace3SearchTrending';
// import MarketPlaceDealOfDay from '~/components/partials/homepage/marketplace/MarketPlaceDealOfDay';
// import MarketPlaceSiteFeatures from '~/components/partials/homepage/marketplace/MarketPlaceSiteFeatures';
// import MarketPlace3Promotions from '~/components/partials/homepage/marketplace3/MarketPlace3Promotions';
// import Market3ProductGroup from '~/components/partials/homepage/marketplace3/Market3ProductGroup';
// import ModuleMarket3ProductGroupBanners from '~/components/partials/homepage/marketplace3/modules/ModuleMarket3ProductGroupBanners';
// import ShopCarouselBanner from '~/components/partials/shop/ShopCarouselBanner';
import MartketPlace4TopCategories from '~/components/partials/homepage/marketplace4/MartketPlace4TopCategories';
import MarketPlaceSeasonalCampaign from "~/components/partials/homepage/marketplace/MarketPlaceSeasonalCampaign";
import MarketPlaceGiftAndBundles from "~/components/partials/homepage/marketplace/MarketPlaceGiftAndBundles";
import MarketPlaceNewCollection from "~/components/partials/homepage/marketplace/MarketPlaceNewCollection";
import MarketPlacePopularProducts from "~/components/partials/homepage/marketplace/MarketPlacePopularProducts";
import MarketPlacePopularSeller from "~/components/partials/homepage/marketplace/MarketPlacePopularSeller";
import MarketPlaceTestimonials from "~/components/partials/homepage/marketplace/MarketPlaceTestimonials";
// import MartketPlace4Banner from "~/components/partials/homepage/marketplace4/MartketPlace4Banner";

// const HomepageDefaultPage = () => {

//     const electricsLinks = [
//         'TV Televisions',
//         'Air Conditioner',
//         'Washing Machine',
//         'Refrigerator',
//         'Microwave',
//     ];
//     const clothingsLinks = [
//         'Women',
//         'Men',
//         'Girl',
//         'Boy',
//         'Baby',
//         'Accessories',
//     ];

//     return (
//         <PageContainer
//             title="">
//             <main id="homepage-5">
//                 {/* <MartketPlace3Banner /> */}
//                 <MartketPlace4Banner />
//                 <div>
//                     <MarketPlaceSiteFeatures />
//                 </div>
//                 <div style={{
//                     marginTop: '50px',
//                     backgroundColor: 'white',
//                     padding: '20px 0px 20px 0px',
//                 }}>
//                     <MartketPlace4TopCategories />
//                 </div>
//                 <MarketPlace3SearchTrending />
//                 <MarketPlaceDealOfDay collectionSlug="deal-of-the-day" />
//                 <MarketPlaceSeasonalCampaign collectionSlug="deal-of-the-day" />
//                 <MarketPlaceGiftAndBundles collectionSlug="deal-of-the-day" />
//                 <MarketPlaceNewCollection collectionSlug="deal-of-the-day" />
//                 <MarketPlacePopularProducts
//                     collectionSlug="deal-of-the-day"
//                     title='Popular Products'
//                 />
//                 <main id="homepage-2" style={{backgroundColor: 'white'}}>
//                     <MarketPlacePopularSeller />
//                 </main>
//                 <div className='container'>
//                     <MarketPlaceTestimonials />
//                 </div>
//                 {/* <MarketPlace3Promotions /> */}
//                 <div className="ps-product-box container">
//                     <MarketPlace3Promotions />
//                     <Market3ProductGroup
//                         heading={{
//                             icon: 'icon-laundry',
//                             title: 'Bathroom',
//                         }}
//                         categorySlug="clothing-and-parel"
//                         links={electricsLinks}
//                         banners={
//                             <ModuleMarket3ProductGroupBanners type="electronic" />
//                         }
//                     />
//                     <Market3ProductGroup
//                         heading={{
//                             icon: 'icon-shirt',
//                             title: 'Fashion Accessories',
//                         }}
//                         categorySlug="clothing-and-parel"
//                         links={clothingsLinks}
//                         banners={
//                             <ModuleMarket3ProductGroupBanners type="clothing" />
//                         }
//                     />
//                     <Market3ProductGroup
//                         heading={{
//                             icon: 'icon-home6',
//                             title: 'Computer Electronics',
//                         }}
//                         categorySlug="garden-and-kitchen"
//                         links={clothingsLinks}
//                         banners={
//                             <ModuleMarket3ProductGroupBanners type="garden" />
//                         }
//                     />
//                 </div>
//             </main>
//         </PageContainer>
//     );
// };

// export default HomepageDefaultPage;




// ------------------------------------------------------------------------------------------------






import React from 'react';
import MarketPlaceHomeBanner from '~/components/partials/homepage/marketplace/MartketPlaceHomeBanner';
import MarketPlaceSiteFeatures from '~/components/partials/homepage/marketplace/MarketPlaceSiteFeatures';
import MarketPlacePromotion from '~/components/partials/homepage/marketplace/MarketPlacePromotions';
import MarketPlaceDealOfDay from '~/components/partials/homepage/marketplace/MarketPlaceDealOfDay';
import MarketClothingsAndApparel from '~/components/partials/homepage/marketplace/modules/MarketClothingsAndApparel';
import MarketConsumerElectronics from '~/components/partials/homepage/marketplace/modules/MarketConsumerElectronics';
import MarketComputerAndTechnology from '~/components/partials/homepage/marketplace/modules/MarketComputerAndTechnology';
import MarketGardenAndKitchen from '~/components/partials/homepage/marketplace/modules/MarketGardenAndKitchen';
import MarketHeathyAndBeauty from '~/components/partials/homepage/marketplace/modules/MarketHeathyAndBeauty';
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
                {/* <div className='container'>
                    <MarketPlacePromotion />

                </div> */}
                <MartketPlace4TopCategories />
                <MarketPlaceDealOfDay collectionSlug="deal-of-the-day" />
                {/* <div className="ps-section--gray"> */}
                {/* <div className="container"> */}
                {/* <MarketClothingsAndApparel collectionSlug="clothings" />
                        <MarketConsumerElectronics collectionSlug="consumer-electronics" />
                        <MarketComputerAndTechnology collectionSlug="customer-bought-products" />
                        <MarketGardenAndKitchen collectionSlug="garden-and-kitchen" />
                        <MarketHeathyAndBeauty categorySlug="health-and-beauty" /> */}

                {/* <MarketPlaceDealOfDay collectionSlug="deal-of-the-day" /> */}
                <MarketPlaceSeasonalCampaign collectionSlug="deal-of-the-day" />
                <MarketPlaceGiftAndBundles collectionSlug="deal-of-the-day" />
                <MarketPlaceNewCollection collectionSlug="deal-of-the-day" />
                <MarketPlacePopularProducts
                    collectionSlug="deal-of-the-day"
                    title='Popular Products'
                />
                <MarketPlacePopularSeller />
                <MarketPlaceTestimonials />



                {/* </div> */}
                {/* </div> */}
                <Newsletters />
            </main>
        </PageContainer>
    );
};
export default HomeMarketPlacePage;