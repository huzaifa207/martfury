import { useState, createContext } from "react";
export const StateContext = createContext();

export default function StateProvider({ children }) {
    const [coupon, setCoupon] = useState('');
    const [emailPhone, setEmailPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expDate, setExpDate] = useState('');
    const [cvc, setCvc] = useState('');

    return (
        <StateContext.Provider
            value={{
                coupon,
                setCoupon,
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
                setPostalCode,
                cardNumber, 
                setCardNumber, 
                cardHolder, 
                setCardHolder,
                expDate,
                setExpDate,
                cvc,
                setCvc
            }}
        >
            {children}
        </StateContext.Provider>
    )
}