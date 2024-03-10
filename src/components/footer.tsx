import { FC } from "react";

import { Button, Grid } from "@mantine/core";

import { Gap } from ".";

export interface FooterProps {
  onCalculate: () => void;
  onAddItem: () => void;
}

export const Footer: FC<FooterProps> = ({ onCalculate, onAddItem }) => {
  return (
    <>
      <Gap />

      <Grid>
        <Grid.Col span={{ sm: 10 }}>
          <Button
            fullWidth
            variant="light"
            onClick={onAddItem}
            size="compact-xl"
          >
            + Add row
          </Button>
        </Grid.Col>

        <Grid.Col span={{ sm: 2 }}>
          <Button
            onClick={onCalculate}
            fullWidth
            color="green"
            variant="gradient"
            size="compact-xl"
          >
            Calculate
          </Button>
        </Grid.Col>
      </Grid>
    </>
  );
};
