import {
  Item,
  ItemActions,
  ItemContent,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { GymLog } from "@/types/gym";
import Link from "next/link";

export const GymLogRow = ({ gymLog }: { gymLog: GymLog }) => {
  return (
    <Link href={`/gym/${gymLog.id}`}>
      <Item variant="outline">
        <ItemHeader>{gymLog.date.toLocaleDateString()}</ItemHeader>
        <ItemMedia />
        <ItemContent>
          {gymLog.excercises.map((excercise) => {
            return (
              <ItemTitle key={excercise.id}>
                {excercise.name} x {excercise.exerciseSets.length}
              </ItemTitle>
            );
          })}
        </ItemContent>
        <ItemActions />
      </Item>
    </Link>
  );
};
