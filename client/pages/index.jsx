import React from 'react';
// import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
// import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
// import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
// import DownLoadApp from '~/components/partials/commons/DownLoadApp';
// import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
// import Newletters from '~/components/partials/commons/Newletters';
// import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
// import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
// import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
// import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';

// imports
import PageContainer from '~/components/layouts/PageContainer';
import MartketPlace3Banner from '~/components/partials/homepage/marketplace3/MartketPlace3Banner';
import MarketPlace3SearchTrending from '~/components/partials/homepage/marketplace3/MarketPlace3SearchTrending';
import MarketPlaceDealOfDay from '~/components/partials/homepage/marketplace/MarketPlaceDealOfDay';
import MarketPlaceSiteFeatures from '~/components/partials/homepage/marketplace/MarketPlaceSiteFeatures';
import MarketPlace3Promotions from '~/components/partials/homepage/marketplace3/MarketPlace3Promotions';
import Market3ProductGroup from '~/components/partials/homepage/marketplace3/Market3ProductGroup';
import ModuleMarket3ProductGroupBanners from '~/components/partials/homepage/marketplace3/modules/ModuleMarket3ProductGroupBanners';

const HomepageDefaultPage = () => {

    const electricsLinks = [
        'TV Televisions',
        'Air Conditioner',
        'Washing Machine',
        'Refrigerator',
        'Microwave',
    ];
    const clothingsLinks = [
        'Women',
        'Men',
        'Girl',
        'Boy',
        'Baby',
        'Accessories',
    ];

    return (
        <PageContainer
            title="">
            <main id="homepage-5">
                <div>
                    <MartketPlace3Banner />
                    <div
                        style={{
                            margin: '50px 0px 0px 0px',
                            backgroundColor: 'white',
                            padding: '20px 0px 20px 0px',
                            
                        }}>
                        <MarketPlaceSiteFeatures />
                    </div>
                    <MarketPlace3SearchTrending />
                    <MarketPlaceDealOfDay collectionSlug="deal-of-the-day" />
                    {/* <MarketPlace3Promotions /> */}
                    <div className="ps-product-box container">
                    <MarketPlace3Promotions />
                        <Market3ProductGroup
                            heading={{
                                icon: 'icon-laundry',
                                title: 'Bathroom',
                            }}
                            categorySlug="clothing-and-parel"
                            links={electricsLinks}
                            banners={
                                <ModuleMarket3ProductGroupBanners type="electronic" />
                            }
                        />
                        <Market3ProductGroup
                            heading={{
                                icon: 'icon-shirt',
                                title: 'Fashion Accessories',
                            }}
                            categorySlug="clothing-and-parel"
                            links={clothingsLinks}
                            banners={
                                <ModuleMarket3ProductGroupBanners type="clothing" />
                            }
                        />
                        <Market3ProductGroup
                            heading={{
                                icon: 'icon-home6',
                                title: 'Computer Electronics',
                            }}
                            categorySlug="garden-and-kitchen"
                            links={clothingsLinks}
                            banners={
                                <ModuleMarket3ProductGroupBanners type="garden" />
                            }
                        />
                    </div>
                </div>
            </main>
        </PageContainer>
    );
};

export default HomepageDefaultPage;
