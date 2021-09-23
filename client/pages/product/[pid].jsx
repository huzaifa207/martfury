import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductRepository from '~/repositories/ProductRepository';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductWidgets from '~/components/partials/product/ProductWidgets';
import CustomerBought from '~/components/partials/product/CustomerBought';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import ProductDetailVariants from '~/components/elements/detail/ProductDetailVariants';
import PageContainer from '~/components/layouts/PageContainer';
import Newsletters from '~/components/partials/commons/Newletters';

const ProductDefaultPage = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getProduct(pid, signal) {
        setLoading(false);

        // uncomment this line to pass signal to fetch call in repository
        // and also change the ProductRepository -> getProductsId function to accept signal parameter
        // const responseData = await ProductRepository.getProductsById(
        //     pid,
        //     signal
        // );

        // comment it out when above code is uncommented
        const responseData = await ProductRepository.getProductsById(pid);
        setProduct(responseData);
        setLoading(false);
    }

    // to prevent undefined error and async call error
    // comment the above statement i.e. "const {pid} = router.query;"
    // useEffect(() => {
    //     const abortController = new AbortController();

    //     if (router && router.query) {
    //         const { pid } = router.query;
    //         if (pid) {
    //             getProduct(pid, { signal: abortController.signal });
    //         }
    //     }

    //     return () => {
    //         abortController.abort();
    //     };
    // }, [router]);

    useEffect(() => {
        getProduct(pid);
    }, [pid]);

    const breadCrumb = [
        {
            id: 1,
            text: 'Home',
            url: '/',
        },
        {
            id: 2,
            text: 'Shop',
            url: '/shop',
        },
        {
            id: 3,
            text: product ? product.title : 'Loading...',
        },
    ];

    // Views
    let productView;
    if (!loading) {
        productView = <ProductDetailVariants product={product} />;
    } else {
        productView = <SkeletonProductDetail />;
    }
    return (
        <PageContainer title={product ? product.title : 'Loading...'}>
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">{productView}</div>
                        <div className="ps-page__right">
                            <ProductWidgets />
                        </div>
                    </div>

                    <RelatedProduct
                        collectionSlug="shop-recommend-items"
                        title="Best Selling Products"
                    />
                    <RelatedProduct
                        collectionSlug="shop-recommend-items"
                        title="On Sale Products"
                    />
                    <CustomerBought
                        layout="fullwidth"
                        collectionSlug="deal-of-the-day"
                    />
                    <RelatedProduct
                        collectionSlug="shop-recommend-items"
                        title="Related Products"
                    />
                </div>
            </div>
            <Newsletters />
        </PageContainer>
    );
};

export default ProductDefaultPage;
