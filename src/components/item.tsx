import { FC } from "react";

import { ActionIcon, Divider, Grid, NumberInput } from "@mantine/core";

import { ExerciseSelect } from ".";

export interface ItemProps {
  onWriteSet: (id: string, set: number) => void;
  onWriteRep: (id: string, rep: number) => void;
  onWriteWeight: (id: string, weight: number) => void;
  onWriteExercise: (id: string, exerciseId: string | null) => void;
  onRemove: (id: string) => void;
  id: string;
  sets: number;
  reps: number;
  weight: number;
  exerciseId: string | null;
}

export const Item: FC<ItemProps> = ({
  id,
  exerciseId,
  reps,
  sets,
  weight,
  onWriteExercise,
  onWriteRep,
  onWriteSet,
  onWriteWeight,
  onRemove,
}) => {
  const handleOnWriteExercise = (exerciseId: string | null) => {
    onWriteExercise(id, exerciseId);
  };

  const handleOnWriteSets = (value: string | number) => {
    if (value) {
      const sets = Number(value);
      onWriteSet(id, sets);
    }
  };

  const handleOnWriteReps = (value: string | number) => {
    if (value) {
      const reps = Number(value);
      onWriteRep(id, reps);
    }
  };

  const handleOnWriteWeight = (value: string | number) => {
    if (value) {
      const weight = Number(value);
      onWriteWeight(id, weight);
    }
  };

  const handleOnRemove = () => {
    onRemove(id);
  };

  return (
    <Grid>
      <Grid.Col span={5}>
        <ExerciseSelect onWrite={handleOnWriteExercise} value={exerciseId} />
      </Grid.Col>

      <Grid.Col span={2}>
        <NumberInput onChange={handleOnWriteSets} value={sets} />
      </Grid.Col>

      <Grid.Col span={2}>
        <NumberInput onChange={handleOnWriteReps} value={reps} />
      </Grid.Col>

      <Grid.Col span={2}>
        <NumberInput onChange={handleOnWriteWeight} value={weight} />
      </Grid.Col>

      <Grid.Col span={1}>
        <ActionIcon
          component="span"
          onClick={handleOnRemove}
          color="red"
          variant="light"
          size="lg"
        >
          x
        </ActionIcon>
      </Grid.Col>

      <Grid.Col span={12}>
        <Divider size="lg" color="transparent" />
        <Divider size="lg" color="transparent" />
      </Grid.Col>
    </Grid>
  );
};
