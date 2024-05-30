import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

// TODO : Add database information instead of static - Temporary
const rows = [
  {
    key: "1",
    dungeon: "Necrotic Wake",
    timer: "32:12",
    players: "Skylard Zaliea Hopeful JPC Asuna ",
  },
  {
    key: "2",
    dungeon: "De Other Side",
    timer: "37:54",
    players: "Skylard Zaliea Hopeful JPC Asuna ",
  },
];

const columns = [
  {
    key: "dungeon",
    label: "DUNGEON",
  },
  {
    key: "timer",
    label: "TIMER",
  },
  {
    key: "players",
    label: "PLAYERS",
  },
];

export default function BestKey() {
  // use "section" in switch case to show different information for each modal
  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
