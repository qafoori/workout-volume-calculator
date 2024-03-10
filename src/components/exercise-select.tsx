import { FC, useMemo } from "react";

import { ComboboxData, ComboboxItemGroup, Select } from "@mantine/core";
import { groupBy } from "lodash";

import { EXERCISE } from "../constants";

export interface ExerciseSelectProps {
  onWrite: (exerciseId: string | null) => void;
  value: string | null;
}

export const ExerciseSelect: FC<ExerciseSelectProps> = ({ onWrite, value }) => {
  const data = useMemo<ComboboxData>(() => {
    const tempData: ComboboxItemGroup[] = [];

    const groupedByMuscles = groupBy(EXERCISE, (exercise) => exercise.muscle);
    const muscles = Object.keys(groupedByMuscles);

    muscles.forEach((muscle) => {
      tempData.push({
        group: muscle,
        items: groupedByMuscles[muscle].map((item) => ({
          label: item.name,
          value: item.id,
        })),
      });
    });

    return tempData;
  }, []);

  return (
    <Select data={data} searchable clearable value={value} onChange={onWrite} />
  );
};
