import { QuizzModel } from './QuizzModel';

export class QuizzShape {
  public id!: number;
  public title!: string;
  public questions!: object[];


  public constructor(data: QuizzModel) {
    this.id = data.id;
    this.title = data.title;
    this.questions = data.questions;
  }

  public static NEW(data: QuizzModel): QuizzShape {
    return new QuizzShape(data);
  }

  public static NEW_BUNCH(data: QuizzModel[]): QuizzShape[] {
    return data.map(QuizzShape.NEW);
  }
}
