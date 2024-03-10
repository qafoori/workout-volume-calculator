import { findIndex } from "lodash";

import { EXERCISE } from "../constants";
import { CalculationResult, Training } from "../types";

export const useCalculator = (trainings: Training[]) => {
  const getTotalVolume = (results: CalculationResult[]) => {
    let volume = 0;
    results.forEach((result) => (volume += result.volume));
    return volume;
  };

  const calculate = () => {
    const results: CalculationResult[] = [];

    trainings.forEach(({ exerciseId, reps, sets, weight }) => {
      const { muscle } = EXERCISE.find(
        (exercise) => exercise.id === exerciseId
      )!;

      const addedIndex = findIndex(results, (item) => item.muscle === muscle);

      if (addedIndex === -1) {
        results.push({
          muscle,
          sets,
          reps: sets * reps,
          volume: sets * reps * weight,
        });
      } else {
        const addedResult = { ...results[addedIndex] };
        addedResult.sets = addedResult.sets + sets;
        addedResult.reps = addedResult.reps + sets * reps;
        addedResult.volume = addedResult.volume + sets * reps * weight;
        results[addedIndex] = addedResult;
      }
    });

    const totalVolume = getTotalVolume(results);

    return { results, totalVolume };
  };

  return calculate;
};
