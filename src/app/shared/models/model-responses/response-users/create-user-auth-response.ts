import { ResponseHeader } from '../../model-common/response-header';
import { Menu } from '../../model-common/menu';

export interface CreateUserAuthResponse extends ResponseHeader {

    data: {
        access_token: string;
        access_token_expire_date: string;
        refresh_token: string;
        refresh_token_expire_date: string;
        permissions: Menu[];
    }
}