import { Action } from '@ngrx/store';
import { Job, JobCreateRequest } from './list.models';

export enum Types {

    READ = '[Jobs] Read: Start',
    READ_SUCCESS = '[Jobs] Read: Success',
    READ_ERROR = '[Jobs] Read: Error',

    CREATE = '[Jobs] Create: Start',
    CREATE_SUCCESS = '[Jobs] Create: Success',
    CREATE_ERROR = '[Jobs] Create: Error',

    UPDATE = '[Jobs] Update: Start',
    UPDATE_SUCCESS = '[Jobs] Update: Success',
    UPDATE_ERROR = '[Jobs] Update: Error',

    DELETE = '[Jobs] Delete: Start',
    DELETE_SUCCESS = '[Jobs] Delete: Success',
    DELETE_ERROR = '[Jobs] Delete: Error',
}

// Read

export class Read implements Action {
    readonly type = Types.READ;
    constructor() { }
}

export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCESS;
    constructor(public items: Job[]) { }
}

export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string) { }
}

// Create

export class Create implements Action {
    readonly type = Types.CREATE;
    constructor(public job: JobCreateRequest) { }
}

export class CreateSuccess implements Action {
    readonly type = Types.CREATE_SUCCESS;
    constructor(public job: Job) { }
}

export class CreateError implements Action {
    readonly type = Types.CREATE_ERROR;
    constructor(public error: string) { }
}

// Update

export class Update implements Action {
    readonly type = Types.UPDATE;
    constructor(public job: Job) { }
}

export class UpdateSuccess implements Action {
    readonly type = Types.UPDATE_SUCCESS;
    constructor(
        public id: string,
        public changes: Partial<Job>
    ) { }
}

export class UpdateError implements Action {
    readonly type = Types.UPDATE_ERROR;
    constructor(public error: string) { }
}

// Delete

export class Delete implements Action {
    readonly type = Types.DELETE;
    constructor(public id: string) { }
}

export class DeleteSuccess implements Action {
    readonly type = Types.DELETE_SUCCESS;
    constructor(public id: string) { }
}

export class DeleteError implements Action {
    readonly type = Types.DELETE_ERROR;
    constructor(public error: string) { }
}

export type All
    = Read
    | ReadSuccess
    | ReadError
    | Create
    | CreateSuccess
    | CreateError
    | Update
    | UpdateSuccess
    | UpdateError
    | Delete
    | DeleteSuccess
    | DeleteError;
