"use client";
import { GYM_LOG_DUMMY_DATA } from "@/constants/gym-dummy";
import { GymLog } from "@/types/gym";
import { useState } from "react";

export default function Gym() {
  /** @note 추후 더미데이터 API로 교체 예정 */
  const [gymLog] = useState<GymLog>(GYM_LOG_DUMMY_DATA[0]);
  return <DateTitle date={gymLog.date} />;
}

export function DateTitle({ date }: { date: Date }) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-12">
      {`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
    </h1>
  );
}
