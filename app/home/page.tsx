"use client";

import { GymLog } from "@/types/gym";
import { GymLogRow } from "./components/gym-log-row";
import { GYM_LOG_DUMMY_DATA } from "@/constants/gym-dummy";
import { useState } from "react";

export default function Home() {
  /** @note 추후 더미데이터 API로 교체 예정 */
  const [gymLogs] = useState(GYM_LOG_DUMMY_DATA);

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
