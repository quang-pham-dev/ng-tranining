import { User as DBUser, Employee } from '@app/models/backend/user';

export interface User extends DBUser {
    role: Employee;
}
