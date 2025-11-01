"use client";
import { GYM_LOG_DUMMY_DATA } from "@/constants/gym-dummy";
import { GymLog } from "@/types/gym";
import { useState } from "react";
import { DateTitle } from "./components/date-title";

export default function Gym() {
  /** @note 추후 더미데이터 API로 교체 예정 */
  const [gymLog] = useState<GymLog>(GYM_LOG_DUMMY_DATA[0]);
  return (
    <>
      <DateTitle date={gymLog.date} />
    </>
  );
}
