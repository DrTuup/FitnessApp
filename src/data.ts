import { Exercise } from "./models/Exercise";
import { Workout } from "./models/Workout";
import { Set } from "./models/Set";

export var Workouts = [
  new Workout(1, "Morning workout", new Date(2023, 0, 13), [
    new Exercise(1, "Bench Press", [
      new Set(1, 10, 50),
      new Set(2, 10, 50),
      new Set(3, 10, 50),
    ]),
  ]),
  new Workout(2, "Evening workout", new Date(2023, 0, 12), [
    new Exercise(1, "Shoulder Press", [
      new Set(1, 10, 50),
      new Set(2, 10, 50),
      new Set(3, 10, 50),
    ]),
    new Exercise(2, "Bench Press", [
      new Set(1, 20, 20),
      new Set(2, 12, 30),
      new Set(3, 10, 40),
    ]),
    new Exercise(3, "Deadlift", [
      new Set(1, 10, 50),
      new Set(2, 10, 50),
      new Set(3, 10, 50),
    ]),

    new Exercise(4, "Squat", [
      new Set(1, 10, 50),
      new Set(2, 10, 50),
      new Set(3, 10, 50),
    ]),
  ]),
  new Workout(3, "Chest", new Date(2023, 0, 11), [
    new Exercise(1, "Shoulder Press", [
      new Set(1, 10, 50),
      new Set(2, 10, 50),
      new Set(3, 10, 50),
    ]),
    new Exercise(2, "Bench Press", [
      new Set(1, 20, 20),
      new Set(2, 12, 30),
      new Set(3, 10, 30),
    ]),
  ]),
];
