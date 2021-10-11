import { firestore } from 'firebase/app';

export interface Job {
    title: string;
    salary: number;
    created: firestore.FieldValue;
    updated?: firestore.FieldValue;
}
