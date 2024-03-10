import { FC } from "react";

import { Divider, Grid } from "@mantine/core";

export const Gap: FC = () => {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Divider size="xl" color="transparent" />
        <Divider size="xl" color="transparent" />
        <Divider size="xl" color="transparent" />
        <Divider size="xl" color="transparent" />
      </Grid.Col>
    </Grid>
  );
};
