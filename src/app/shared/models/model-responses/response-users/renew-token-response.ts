import { ResponseHeader } from '../../model-common/response-header';

/**
 * Model RenewTokenResponse
 * @name : RenewTokenResponse
 * @type: interface
 * @author: QuangPN
 * @since: 2019/08/29
 * @version: 0.0.1
 */
export interface RenewTokenResponse extends ResponseHeader {
    data: {
        access_token: string;
    }
}