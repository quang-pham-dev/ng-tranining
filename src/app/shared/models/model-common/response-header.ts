/**
 * Model ResponseHeader
 * @name : ResponseHeader
 * @type: interface
 * @author: QuangPN
 * @since: 2019/08/29
 * @version: 0.0.1
 */

export interface ResponseHeader {
    timestamp: string;
    importance: string;
    status_code: string;
    message: string;
    display_api_name: string;
    data?: any;
    error?: any;
}