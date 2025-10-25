export interface GymLog {
  id: string;
  date: Date;
  excercises: Array<Excercise>;
}

export interface ExerciseSet {
  reps: number;
  weight: number;
}

export interface Excercise {
  id: string;
  name: string;
  exerciseSets: Array<ExerciseSet>;
}
