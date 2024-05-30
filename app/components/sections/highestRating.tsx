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
import TableBase from "../table";

// TODO : Add database information instead of static - Temporary
const rows = [
  {
    key: "1",
    playerName: "Vealpal",
    spec: "Protection",
    rating: 4100,
  },
  {
    key: "2",
    playerName: "Vealeriadru",
    spec: "Guardian",
    rating: 3720,
  },
];

const columns = [
  {
    key: "playerName",
    label: "PLAYER NAME",
  },
  {
    key: "spec",
    label: "SPEC",
  },
  {
    key: "rating",
    label: "Rating",
  },
];

export default function HighestRating() {
  return (
    <TableBase rows={rows} columns={columns}/>
  );
}
