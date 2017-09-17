import { Group } from './group';
import { User } from './user';
import { Subject } from './subject';

export class GroupCustom {
    name: string;
    login: string;
    subjectDTO: Subject;
    createdBy: string;
    groupDTOs?: Group[];
    userDTOs?: User[];
  }