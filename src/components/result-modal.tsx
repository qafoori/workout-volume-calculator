import { FC } from "react";

import { Modal, Table, Title } from "@mantine/core";
import { CalculationResult } from "../types";

export interface ResultModalProps {
  onClose: () => void;
  results: CalculationResult[] | null;
  totalVolume: number | null;
}

export const ResultModal: FC<ResultModalProps> = ({
  results,
  totalVolume,
  onClose,
}) => {
  return (
    <Modal
      title="Calculation result"
      size="xl"
      opened={!!results}
      onClose={onClose}
    >
      {!results ? (
        <></>
      ) : (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Muscle</Table.Th>
              <Table.Th>Sets</Table.Th>
              <Table.Th>Reps</Table.Th>
              <Table.Th>Volume</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {results.map((result) => (
              <Table.Tr key={result.muscle}>
                <Table.Td>{result.muscle}</Table.Td>
                <Table.Td>{result.sets}</Table.Td>
                <Table.Td>{result.reps}</Table.Td>
                <Table.Td>{result.volume} KG</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>

          <Table.Caption>
            <br />
            <br />
            <Title order={3}>Total volume: {totalVolume} KG</Title>
          </Table.Caption>
        </Table>
      )}
    </Modal>
  );
};
