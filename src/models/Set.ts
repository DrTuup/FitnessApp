export class Set {
  id: number;
  reps: number;
  weight: number;
  volume: number;

  constructor(id: number, reps: number, weight: number) {
    this.id = id;
    this.reps = reps;
    this.weight = weight;
    this.volume = this.reps * this.weight;
  }
}
