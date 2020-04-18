import { QuestionShape }  from './QuestionShape';

export class Question {
  public constructor(public readonly _id : number,
    public readonly text : string,
    public readonly answers : object[],
) {}

  public static NEW(data: QuestionShape) : Question {
    return new Question(
      data._id,
    data.text,
    data.answers,
    );
  }
  public static NEW_BUNCH(data: QuestionShape[]): Question[] {
    return data.map(Question.NEW);
  }
}
