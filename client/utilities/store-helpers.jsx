/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */

import React from 'react';
import Repository, { baseUrl } from '~/repositories/Repository';
import StoreRepository from '~/repositories/StoreRepository';

export async function getStoresHelper(pageSize = 12) {
    let stores;
    const queries = {
        _limit: pageSize,
    };
    stores = await StoreRepository.getStores(queries);
    if (stores) {
        return stores;
    } else {
        return null;
    }
}

export function getUser(creds) {
    return Repository.post(`${baseUrl}/auth/local`, creds);
}

export function registerUser(creds) {
    return Repository.post(`${baseUrl}/auth/local/register`, creds);
}
