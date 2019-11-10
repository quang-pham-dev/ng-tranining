import { environment } from '../../../environments/environment';

const HOST = environment.rootUrl;

export const MOCK_API = {


    //users
    I_1_FETCH_USERS:`${HOST}/users/filter`,
    I_2_FETCH_USER_BY_ID:`${HOST}/users`,
    I_3_CREATE_USER:`${HOST}/users`,
    I_4_UPDATE_USER:`${HOST}/users`,
    I_10_CREATE_USER_AUTH: `${HOST}/users/auth/login`,
    I_11_RENEWTOKEN: `${HOST}/users/auth/renew`,
    I_12_UPDATE_USER_AUTH: `${HOST}/users/auth/login`,
    I_13_FETCH_USER_OPERATION: `${HOST}/users/operation`,
}