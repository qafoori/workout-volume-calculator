import { useState } from "react";

import { findIndex, uniqueId } from "lodash";

import { Training } from "../types";

const createRawTraining = (): Training => ({
  id: uniqueId(),
  exerciseId: null,
  reps: 0,
  sets: 0,
  weight: 0,
});

export const useTrainings = () => {
  const [trainings, setTrainings] = useState<Training[]>([createRawTraining()]);

  const addRawTraining = () => {
    setTrainings((current) => [...current, createRawTraining()]);
  };

  const updateTraining = (
    id: string,
    key: keyof Training,
    value: string | number
  ) => {
    setTrainings((currentTrainings) => {
      const newTrainings = [...currentTrainings];
      const targetTrainingIndex = findIndex(
        newTrainings,
        (training) => training.id === id
      );

      if (targetTrainingIndex === -1) {
        return newTrainings;
      }

      newTrainings[targetTrainingIndex][key] = value as never;

      return newTrainings;
    });
  };

  const removeTraining = (id: string) => {
    setTrainings((currentTrainings) => {
      const newTrainings = [...currentTrainings];
      if (newTrainings.length === 1) {
        return newTrainings;
      }
      return newTrainings.filter((training) => training.id !== id);
    });
  };

  const writeSet = (id: string, set: number) => {
    updateTraining(id, "sets", set);
  };

  const writeRep = (id: string, rep: number) => {
    updateTraining(id, "reps", rep);
  };

  const writeWeight = (id: string, weight: number) => {
    updateTraining(id, "weight", weight);
  };

  const writeExercise = (id: string, exerciseId: string | null) => {
    updateTraining(id, "exerciseId", exerciseId || "");
  };

  return {
    trainings,
    setTrainings,
    addRawTraining,
    removeTraining,
    writeSet,
    writeRep,
    writeWeight,
    writeExercise,
  };
};
