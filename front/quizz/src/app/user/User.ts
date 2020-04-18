import { UserShape } from './UserShape';

export class User {
  public constructor(
    public readonly id: number,
    public readonly username: string,
    public readonly result: [object],
  ) {}

  public static NEW(data: UserShape): User {
    return new User(data.id, data.username, data.result);
  }

  public static NEW_BUNCH(data: UserShape[]): User[] {
    return data.map(User.NEW);
  }
}
