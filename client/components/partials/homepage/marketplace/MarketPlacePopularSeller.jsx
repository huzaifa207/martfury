import React from 'react';
import Link from 'next/link';

const MarketPlacePopularSeller = () => (
    <div className="ps-best-sale-brands ps-section--furniture">
        <div className="container">
            <div className="ps-section__header">
                <h3>BEST SELLER BRANDS</h3>
            </div>
            <div className="ps-section__content">
                <ul className="ps-image-list">
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/brand/2-1.jpg" alt="nexusberry" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/brand/2-2.jpg" alt="nexusberry" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/brand/2-3.jpg" alt="nexusberry" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/brand/2-4.jpg" alt="nexusberry" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/brand/2-5.jpg" alt="nexusberry" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/brand/2-6.jpg" alt="nexusberry" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/brand/2-7.jpg" alt="nexusberry" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/brand/2-8.jpg" alt="nexusberry" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/brand/2-9.jpg" alt="nexusberry" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/brand/2-10.jpg" alt="nexusberry" />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default MarketPlacePopularSeller;
