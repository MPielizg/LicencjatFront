import { Subject } from './subject';
import { User } from './user';
export class Group {
  groupNumber: number;
  login: string;
  userDTOs: User[];
  subjectDTO: Subject;

}
