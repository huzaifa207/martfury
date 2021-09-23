import axios from 'axios';
const baseDomain = 'http://localhost:1337'; // API for products
export const basePostUrl = 'http://localhost:1337'; // API for post
export const baseStoreURL = 'http://localhost:1337'; // API for vendor(store)

// const baseDomain = 'http://4ae3-182-185-141-94.ngrok.io'; // API for products
// export const basePostUrl = 'http://4ae3-182-185-141-94.ngrok.io'; // API for post
// export const baseStoreURL = 'http://4ae3-182-185-141-94.ngrok.io'; // API for vendor(store)

export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
