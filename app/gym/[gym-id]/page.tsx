"use client";
import { GYM_LOG_DUMMY_DATA } from "@/constants/gym-dummy";
import { GymLog } from "@/types/gym";
import { useState } from "react";
import { DateTitle } from "./components/date-title";
import { Button } from "@/components/ui/button";

export default function Gym() {
  /** @note 추후 더미데이터 API로 교체 예정 */
  const [gymLog] = useState<GymLog>(GYM_LOG_DUMMY_DATA[0]);
  return (
    <>
      <DateTitle date={gymLog.date} />

      <div className="flex w-full my-4">
        <Button className="w-full h-12 text-2xl font-bold ">+</Button>
      </div>
    </>
  );
}
