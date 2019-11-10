

export interface UpdateUserAuthRequest {
    user_id: string;
    user_pwd: string;
    new_user_pwd: string;
    new_user_pwd_conf: string;
}