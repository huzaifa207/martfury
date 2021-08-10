import Repository, { baseUrl } from './Repository';
import { convertSlugsQueryString } from '../utilities/product-helper';

class MediaRespository {
    async getBannersBySlugs(payload) {
        let query = '';
        payload.forEach((item) => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/banners?${query}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getBannersBySlug(payload) {
        const endPoint = `banners?slug_in=${payload}`;
        const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                if (response.data) {
                    return response.data[0].items;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

    async getPromotionsBySlug(payload) {
        const endPoint = `promotions?slug_in=${payload}`;
        const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                if (response.data) {
                    return response.data[0].items;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

    async getPromotionsBySlugs(payload) {
        const query = convertSlugsQueryString(payload);
        const reponse = await Repository.get(`${baseUrl}/promotions?${query}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({
                error: JSON.stringify(error),
            }));
        return reponse;
    }
}

export default new MediaRespository();
