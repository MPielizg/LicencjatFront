import { Group } from './group';
export class User {
  constructor(
  public name: string,
  public surname: string,
  public title: string,
  public status: string,
  public phoneNumber: number,
  public login: string,
  public createdBy: string,
  public groupDTOs?: Group[]
  ) { }
}
