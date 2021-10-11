import { Job as DBJob } from '@app/models/backend/job';

export interface Job extends DBJob {
    id: string;
}

export type JobCreateRequest = DBJob;
