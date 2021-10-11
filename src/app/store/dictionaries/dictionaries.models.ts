import { Item, ControlItem, Icon } from '@app/models/frontend';
export { Item, ControlItem } from '@app/models/frontend';


export interface Dictionaries {
    roles: Dictionary;
    specializations: Dictionary;
    qualifications: Dictionary;
    skills: Dictionary;
    countries: Dictionary;
}

export interface Dictionary {
    items: Item[];
    controlItems: ControlItem[];
}

