import React, { Component, useEffect, useState } from 'react';
import Slider from 'react-slick';

import { connect } from 'react-redux';
import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
import Product from '~/components/elements/products/Product';
import { carouselStandard } from '~/utilities/carousel-helpers';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';

const RelatedProduct = ({ collectionSlug, boxed, layout, title }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(
            collectionSlug
        );
        if (responseData) {
            setProductItems(responseData.items);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getProducts();
    }, [collectionSlug]);

    const carouselFullwidth = {
        dots: true,
        infinite: productItems && productItems.length > 7 ? true : false,
        speed: 750,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        lazyload: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'Linear',
        responsive: [
            {
                breakpoint: 1750,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                },
            },

            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                },
            },
        ],
    };

    // Views
    let carouselView;
    if (!loading) {
        if (productItems) {
            carouselView = (
                <Slider {...carouselFullwidth} className="ps-carousel outside">
                    {productItems.map((item, index) => {
                        if (index < 8) {
                            return <Product product={item} key={item.id} />;
                        }
                    })}
                </Slider>
            );
        } else {
            carouselView = <p>No product found.</p>;
        }
    } else {
        carouselView = <p>Loading...</p>;
    }

    return (
        <div
            className={`ps-section--default ps-related-products ${
                boxed === true ? 'boxed' : ''
            }`}>
            <div className="ps-section__header">
                <h3>{title}</h3>
            </div>
            <div className="ps-section__content">{carouselView}</div>
        </div>
    );
};

export default connect((state) => state.collection)(RelatedProduct);
