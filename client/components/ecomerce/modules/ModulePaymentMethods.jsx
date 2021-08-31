import React, { useState, useContext } from 'react';
import { Radio } from 'antd';
import { useRouter } from 'next/router';
import { StateContext } from "~/components/context/StateProvider";

const ModulePaymentMethods = () => {
    const Router = useRouter();
    const [method, setMethod] = useState(1);
    const {
        cardNumber,
        setCardNumber,
        cardHolder,
        setCardHolder,
        expDate,
        setExpDate,
        cvc,
        setCvc
    } = useContext(StateContext);

    function handleChangeMethod(e) {
        setMethod(e.target.value); //e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault();
        Router.push('/account/payment-success');
    }

    return (
        <>
            <h4>Payment Methods</h4>
            <div className="ps-block--payment-method">
                <div className="ps-block__header">
                    <Radio.Group
                        onChange={(e) => handleChangeMethod(e)}
                        value={method}>
                        <Radio value={1}>Visa / Master Card</Radio>
                        <Radio value={2}>Paypal</Radio>
                    </Radio.Group>
                </div>
                <div className="ps-block__content">
                    {method === 1 ? (
                        <div className="ps-block__tab">
                            <div className="form-group">
                                <label>Card Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={cardNumber}
                                    onChange={event => setCardNumber(event.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Card Holders</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={cardHolder}
                                    onChange={event => setCardHolder(event.target.value)}
                                />
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-4">
                                    <div className="form-group">
                                        <label>Expiration Date (MM/YY)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="01/21"
                                            value={expDate}
                                            onChange={event => setExpDate(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className=" col-sm-4 col-4">
                                    <div className="form-group">
                                        <label>CVV</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={cvc}
                                            onChange={event => setCvc(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button
                                    className="ps-btn ps-btn--fullwidth"
                                    onClick={(e) => handleSubmit(e)}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="ps-block__tab">
                            <a
                                className="ps-btn"
                                href="https://www.paypal.com/"
                                target="_blank">
                                Process with Paypal
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ModulePaymentMethods;
