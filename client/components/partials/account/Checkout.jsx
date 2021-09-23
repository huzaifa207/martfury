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

    // const [pMethod, setPMethod] = React.useState(1);
    // function handlePChangeMethod(e) {
    //     setPMethod(e.target.value);
    //    handleChangeMethod(e); //e.target.value
    // }

    // const [bMethod, setBMethod] = React.useState(1);
    // function handleBChangeMethod(e) {
    //     setBMethod(e.target.value);
    //    handleChangeMethod(e); //e.target.value
    // }

    // const [check,setCheck] =React.useState("private");
    // function handleCheck(e){
    //     if(check!==e){
    //         // const timer = setTimeout(() => {
    //             setCheck(e);
    //             console.log(e);
    //         //   }, 10000);
    //         //   return () => clearTimeout(timer);
            
    //     }
    // }    

    
            
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










{/* <div label="Private Purcahse" onChange={handleCheck("private")} >
                                <div className="ps-block__header" style={{marginBottom:"30px"}}>
                                    <Radio.Group
                                        onChange={(e) => {handlePChangeMethod(e);handleCheck("private");}}
                                        value={pMethod}>
                                        <Radio value={1}>SSN Autofill</Radio>
                                        <Radio value={2}>Manual Fill</Radio>
                                    </Radio.Group>
                                </div>
                                
                            <div className="row" id="priv-1">
                            
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12" >
                            { method === 1 && pMethod===1? (
                                <FormCheckoutInformation2 test={check} />  )                          
                            :(
                                <FormCheckoutInformation test={check} />
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
                            <div label="Business Purchase" onChange={handleCheck("business")}>
                                <div className="ps-block__header" style={{marginBottom:"30px"}}>
                                    <Radio.Group
                                        onChange={(e) => {handleBChangeMethod(e);handleCheck("business");}}
                                        value={bMethod}>
                                        <Radio value={1}>SSN Autofill</Radio>
                                        <Radio value={2}>Manual Fill</Radio>
                                    </Radio.Group>
                                </div>
                                
                            <div className="row" id="busi-1">
                            
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12" >
                            { method === 1 && bMethod===1? (
                                <FormCheckoutInformation2 test={check} />
                            ):(
                                <FormCheckoutInformation test={check} />
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
                            </div> */}