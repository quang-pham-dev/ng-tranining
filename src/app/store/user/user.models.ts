import { User } from '@app/models/backend/user';

export { User, Recruiter, Employee } from '@app/models/backend/user';
export { Roles } from '@app/models/backend/role';

// Requests models

export interface EmailPasswordCredentials {
    email: string;
    password: string;
}

export type UserCreateRequest = Omit<User, 'uid' | 'email' | 'created'>;
