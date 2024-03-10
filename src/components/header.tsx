import { FC } from "react";

import { Divider, Grid, Text } from "@mantine/core";

export const Header: FC = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={12}>
          <Divider size="xl" color="transparent" />
          <Divider size="xl" color="transparent" />
          <Divider size="xl" color="transparent" />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={5}>
          <Text>Exercise</Text>
        </Grid.Col>

        <Grid.Col span={2}>
          <Text>Sets</Text>
        </Grid.Col>

        <Grid.Col span={2}>
          <Text>Reps</Text>
        </Grid.Col>

        <Grid.Col span={2}>
          <Text>Weight</Text>
        </Grid.Col>

        <Grid.Col span={1} />
      </Grid>
    </>
  );
};
