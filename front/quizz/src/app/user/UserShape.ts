import { UserModel } from './UserModel';

export class UserShape {
  public id!: number;
  public password!: string;
  public username!: string;
  public result!: [object];

  public constructor(data: UserModel) {
    this.id = data.id;
    this.username = data.username;
    this.password = data.password;
    this.result = data.result;
  }

  public static NEW(data: UserModel): UserShape {
    return new UserShape(data);
  }

  public static NEW_BUNCH(data: UserModel[]): UserShape[] {
    return data.map(UserShape.NEW);
  }
}
