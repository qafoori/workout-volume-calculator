import { FC, useState } from "react";

import { Container, ScrollArea } from "@mantine/core";

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
    <Container h="100%">
      <ResultModal
        results={calculationResult?.results || null}
        totalVolume={calculationResult?.totalVolume || null}
        onClose={closeModal}
      />

      <ScrollArea w="100%" h="calc(100% - 140px)">
        <Container miw={600}>
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
        </Container>
      </ScrollArea>

      <Footer onAddItem={on.addRawTraining} onCalculate={handleOnCalculate} />
    </Container>
  );
};
