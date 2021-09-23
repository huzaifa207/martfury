import React, { useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input } from 'antd';
import { StateContext } from "~/components/context/StateProvider";
import ModulePaymentMethods from '~/components/ecomerce/modules/ModulePaymentMethods';

function SsnBusinessFormCheckoutInformation() {
    const {
        emailPhone,
        setEmailPhone,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        address,
        setAddress,
        apartment,
        setApartment,
        city,
        setCity,
        postalCode,
        setPostalCode

    } = useContext(StateContext);
    

    console.log(emailPhone);

    const handleLoginSubmit = () => {
        Router.push('/account/shipping');
    };

    return (
        <Form
            className="ps-form__billing-info"
            onFinish={handleLoginSubmit}>
            <h3 className="ps-form__heading">SSN</h3>                        
                <div>
                <div class="row" style={{marginBottom:'0'}}>
                <div className="col-sm-8 form-group" style={{marginBottom:'0'}}>
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: false,                            
                            message:
                                'Enter Company SSN!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="Company SSN - Social Security Number"
                        value={emailPhone}
                        onChange={event => setEmailPhone(event.target.value)}
                        
                    />
                </Form.Item>
            </div>
            <div class="col-sm-4">
                    <div className="form-group">
                                <button
                                    className="ps-btn ps-btn--fullwidth"
                                    // onClick={(e) => handleSubmit(e)}
                                    >
                                    Get Address
                                </button>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="ps-checkbox">
                    <input
                        className="form-control"
                        type="checkbox"
                        id="keep-update"
                    />
                    <label htmlFor="keep-update">
                        Keep me up to date on news and exclusive offers?
                    </label>
                </div>
            </div>
            <h3 className="ps-form__heading">Shipping address</h3>
            <div className="row">               
                <div className="col-sm-12">
                    <div className="form-group">
                        <Form.Item
                            name="CompannyName"
                            rules={[
                                {
                                    required: false,
                                    message: 'Enter your Company name!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder="Company Name"
                                value={lastName}
                                onChange={event => setLastName(event.target.value)}
                                disabled={true}
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <Form.Item
                    name="address"
                    rules={[
                        {
                            required: false,
                            message: 'Enter Company address!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="Company Address"
                        value={address}
                        onChange={event => setAddress(event.target.value)}
                        disabled={true}
                    />
                </Form.Item>
            </div>            
            </div>            
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="city"
                            rules={[
                                {
                                    required: false,
                                    message: 'Enter a city!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="city"
                                placeholder="City"
                                value={city}
                                onChange={event => setCity(event.target.value)}
                                disabled={true}
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="postalCode"
                            rules={[
                                {
                                    required: false,
                                    message: 'Enter a postal oce!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="postalCode"
                                placeholder="Postal Code"
                                value={postalCode}
                                onChange={event => setPostalCode(event.target.value)}
                                disabled={true}
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="ps-block--shipping">
                <h3 className="ps-form__heading">Shipping Method</h3>
                <div className="ps-block__panel">
                    <figure>
                        <small>International Shipping</small>
                        <strong>$20.00</strong>
                    </figure>
                </div>
            </div>
            <div className="ps-block--shipping">
                <ModulePaymentMethods />
            </div>
            <div className="form-group">
                <div className="ps-checkbox">
                    <input
                        className="form-control"
                        type="checkbox"
                        id="save-information"
                    />
                    <label htmlFor="save-information">
                        Save this information for next time
                    </label>
                </div>
            </div>
            <div className="ps-form__submit">
                <Link href="/account/shopping-cart">
                    <a>
                        <i className="icon-arrow-left mr-2"></i>
                        Return to shopping cart
                    </a>
                </Link>                
            </div>
        </Form>
    );
}


export default SsnBusinessFormCheckoutInformation;
