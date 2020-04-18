import { QuestionModel } from './QuestionModel';

const NO_TITLE = 'No Title';

export class QuestionShape {
  public _id!: number;
  public  text!: string;
  public  answers!: object[];


  constructor(data: QuestionModel) {
    this._id=data._id;
    this.text=data.text;
    this.answers=data.answers;

  }

  public static NEW(data: QuestionModel): QuestionShape {
    return new QuestionShape(data);
  }

  public static NEW_BUNCH(data: QuestionModel[]): QuestionShape[] {
    return data.map(QuestionShape.NEW);
  }

}
