import { ResponseHeader } from '../../model-common/response-header';

export interface UpdateUserAuthResponse extends ResponseHeader {

    data: {
        access_token: string;
        refresh_token: string;
        // permissions: Menu[];
    }
}