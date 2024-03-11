import { Dispatch, SetStateAction, useEffect } from "react";

import { Training } from "../types";

export const useSync = (
  trainings: Training[],
  setTrainings: Dispatch<SetStateAction<Training[]>>
) => {
  const KEY = "synchronized-trainings";

  useEffect(() => {
    const synchronizedTrainings = localStorage.getItem(KEY);

    if (synchronizedTrainings) {
      try {
        setTrainings(JSON.parse(synchronizedTrainings));
      } catch (error) {
        alert("Invalid trainings are synchronized, Starting from scratch");
      }
    }
  }, [setTrainings]);

  useEffect(() => {
    if (trainings) {
      localStorage.setItem(KEY, JSON.stringify(trainings));
    }
  }, [trainings]);
};
