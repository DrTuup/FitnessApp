import { Set } from "./Set";

export class Exercise {
  id: number;
  name: string;
  sets: Set[];
  volume: number;

  constructor(id: number, name: string, sets: Set[]) {
    this.id = id;
    this.name = name;
    this.sets = sets;
    this.volume = this.sets.reduce((total, set) => {
      return total + set.volume;
    }, 0);
  }
}
