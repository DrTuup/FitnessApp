import { Exercise } from "./Exercise";

export class Workout {
  id: number;
  name: string;
  date: Date;
  exercises: Exercise[];

  constructor(id: number, name: string, date: Date, exercises: Exercise[]) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.exercises = exercises;
  }
}
