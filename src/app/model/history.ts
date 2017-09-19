
export class History {
  constructor(
  public id: number,
  public from: string,
  public destination: string,
  public message: string,
  public date: Date
  ) { }
}