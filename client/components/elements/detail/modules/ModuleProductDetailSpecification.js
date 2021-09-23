import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = ({ sku, categories, tags }) => (
    <div className="ps-product__specification">
        <Link href="/page/blank">
            <a className="report">Report Abuse</a>
        </Link>
        {/*TODO: dynamic sku*/}
        <p>
            <strong>SKU:</strong> {sku || 'SF1133569600-2'}
        </p>
        {/*TODO: dynamic categories*/}
        <p className="categories">
            <strong> Categories:</strong>
            <Link href="/shop">
                <a>Consumer Electronics</a>
            </Link>
            <Link href="/shop">
                <a>Refrigerator</a>
            </Link>
            <Link href="/shop">
                <a>Babies & Moms</a>
            </Link>
        </p>
        {/*TODO: dynamic tags*/}

        <p className="tags">
            <strong> Tags</strong>
            <Link href="/shop">
                <a>sofa</a>
            </Link>
            <Link href="/shop">
                <a>technologies</a>
            </Link>
            <Link href="/shop">
                <a>wireless</a>
            </Link>
        </p>
    </div>
);

export default ModuleProductDetailSpecification;
