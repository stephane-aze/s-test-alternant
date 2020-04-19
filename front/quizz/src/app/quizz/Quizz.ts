import { QuizzShape } from './QuizzShape';

export class Quizz {
  public readonly id!: number;
  public readonly title!: string;
  public readonly questions!: object[];

  public constructor(data: QuizzShape) {
    this.id = data.id;
    this.title = data.title;
    this.questions = data.questions;
  }

  public static NEW(data: QuizzShape): Quizz {
    return new Quizz(data);
  }

  public static NEW_BUNCH(data: QuizzShape[]): Quizz[] {
    return data.map(Quizz.NEW);
  }
}
