import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">
                <a href="mailto:info@nexusberry.com">info@nexusberry.com</a>
                <p>
                    6-D, Main Boulevard, Faisal Town Town, Lahore, Pakistan.
                </p>
                <ul className="ps-list--social">
                    <li>
                        <a className="facebook" target="_blank" href="https://www.facebook.com/nexusberry?_rdc=1&_rdr">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a className="twitter" target="_blank" href="https://twitter.com/nexusberrypk">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    {/* <li>
                        <a className="google-plus" href="#">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </li> */}
                    <li>
                        <a className="instagram" target='_blank' href="https://www.instagram.com/nexusberry/">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Quick links</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/blank">
                        <a>Policy</a>
                    </Link>
                </li>

                <li>
                    <Link href="/page/blank">
                        <a>Term & Condition</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Shipping</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Return</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>FAQs</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Company</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/blank">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Affilate</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Career</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/contact-us">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Bussiness</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/blank">
                        <a>Our Press</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Checkout</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/user-information">
                        <a>My account</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Shop</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
