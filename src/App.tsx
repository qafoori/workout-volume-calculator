import { FC, useState } from "react";

import { Container } from "@mantine/core";

import { Footer, Header, Item, ResultModal } from "./components";
import { useCalculator, useTrainings } from "./hooks";
import { useSync } from "./hooks/use-sync";

export const App: FC = () => {
  const { trainings, setTrainings, ...on } = useTrainings();
  const calculate = useCalculator(trainings);

  useSync(trainings, setTrainings);

  const [calculationResult, setCalculationResult] = useState<ReturnType<
    typeof calculate
  > | null>(null);

  const handleOnCalculate = () => {
    setCalculationResult(calculate());
  };

  const closeModal = () => {
    setCalculationResult(null);
  };

  return (
    <Container>
      <ResultModal
        results={calculationResult?.results || null}
        totalVolume={calculationResult?.totalVolume || null}
        onClose={closeModal}
      />

      <Header />

      {trainings.map((training) => (
        <Item
          {...training}
          key={training.id}
          onRemove={on.removeTraining}
          onWriteSet={on.writeSet}
          onWriteRep={on.writeRep}
          onWriteWeight={on.writeWeight}
          onWriteExercise={on.writeExercise}
        />
      ))}

      <Footer onAddItem={on.addRawTraining} onCalculate={handleOnCalculate} />
    </Container>
  );
};
