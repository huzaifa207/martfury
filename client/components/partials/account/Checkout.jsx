import React from 'react';
import { Radio } from 'antd';
// import FormCheckoutInformation2 from './modules/FormCheckoutInformation2';
// import FormCheckoutInformation from './modules/FormCheckoutInformation';
import ManualBusinessFormCheckoutInformation from './modules/ManualBusinessFormCheckoutInformation';
import ManualPrivateFormCheckoutInformation from './modules/ManualPrivateFormCheckoutInformation';
import SsnBusinessFormCheckoutInformation from './modules/SsnBusinessFormCheckoutInformation';
import SsnPrivateFormCheckoutInformation from './modules/SsnPrivateFormCheckoutInformation';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
import {Tabs} from 'antd';

const {TabPane} =Tabs;

const Checkout = () => {
    const [method, setMethod] = React.useState(1);
    function handleChangeMethod(e) {
        setMethod(e.target.value); //e.target.value
    }

    
            
    return (
        <div className="ps-checkout ps-section--shopping container">
            {/* <div className="container"> */}
                <div className="ps-section__header">
                    <h1>Checkout Information</h1>
                </div>
                <div className="ps-section__content">
                    <div className="ps-form--checkout">
                        <div className="ps-form__content">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Private Purchase" key="1" >
                                <div>
                                    <div className="ps-block__header" style={{marginBottom:"30px"}}>
                                        <Radio.Group
                                            onChange={(e) => {handleChangeMethod(e)}}
                                            value={method}>
                                            <Radio value={1}>SSN Autofill</Radio>
                                            <Radio value={2}>Manual Fill</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className="row" id="priv-1">
                            
                                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12" >
                                            { method === 1?  (
                                                <SsnPrivateFormCheckoutInformation/>  )                          
                                            :(
                                                <ManualPrivateFormCheckoutInformation/>
                                            )
                                            }                                            
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                                            <div className="ps-form__orders">
                                                <h3>Your order</h3>
                                                <ModulePaymentOrderSummary shipping={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>              
                            <TabPane tab="Business Purchase" key="2">
                                <div>
                                    <div className="ps-block__header" style={{marginBottom:"30px"}}>
                                        <Radio.Group
                                            onChange={(e) => {handleChangeMethod(e)}}
                                            value={method}>
                                            <Radio value={1}>SSN Autofill</Radio>
                                            <Radio value={2}>Manual Fill</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className="row">
                            
                                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12" >
                                            { method === 1?  (
                                                <SsnBusinessFormCheckoutInformation/>  )                          
                                            :(
                                                <ManualBusinessFormCheckoutInformation/>
                                            )
                                            }                                            
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                                            <div className="ps-form__orders">
                                                <h3>Your order</h3>
                                                <ModulePaymentOrderSummary shipping={true} />
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </TabPane>
                                           
                        </Tabs>
                        
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Checkout;
