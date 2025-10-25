"use client";

import { GymLog } from "@/types/gym";
import { GymLogRow } from "./components/gym-log-row";

export default function Home() {
  const gymLogs: Array<GymLog> = [
    {
      id: "gym-1",
      date: new Date("2025-01-01"),
      excercises: [
        {
          id: "exc-1",
          name: "벤치 프레스",
          exerciseSets: [{ reps: 10, weight: 100 }],
        },
        {
          id: "exc-2",
          name: "데드리프트",
          exerciseSets: [{ reps: 10, weight: 100 }],
        },
        {
          id: "exc-3",
          name: "스쿼트",
          exerciseSets: [{ reps: 10, weight: 100 }],
        },
      ],
    },
    {
      id: "gym-2",
      date: new Date("2025-01-01"),
      excercises: [
        {
          id: "exc-4",
          name: "벤치 프레스",
          exerciseSets: [{ reps: 10, weight: 100 }],
        },
        {
          id: "exc-5",
          name: "데드리프트",
          exerciseSets: [{ reps: 10, weight: 100 }],
        },
        {
          id: "exc-6",
          name: "스쿼트",
          exerciseSets: [{ reps: 10, weight: 100 }],
        },
      ],
    },
    {
      id: "gym-3",
      date: new Date("2025-01-01"),
      excercises: [
        {
          id: "exc-7",
          name: "벤치 프레스",
          exerciseSets: [{ reps: 10, weight: 100 }],
        },
        {
          id: "exc-8",
          name: "데드리프트",
          exerciseSets: [{ reps: 10, weight: 100 }],
        },
        {
          id: "exc-9",
          name: "스쿼트",
          exerciseSets: [{ reps: 10, weight: 100 }],
        },
      ],
    },
  ];
  return (
    <>
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-12">
        Gym log
      </h1>
      <div className="flex flex-col gap-4 w-full">
        {gymLogs.map((gymLog) => {
          return <GymLogRow key={gymLog.id} gymLog={gymLog} />;
        })}
      </div>
    </>
  );
}
