"use client";

import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

// TODO : Add database information instead of static - Temporary
const rows = [
  {
    key: "1",
    name: "Vealpal",
    role: "Tank",
    completion: "Timed",
  },
  {
    key: "2",
    name: "Vealeriadru",
    role: "DPS",
    completion: "Untimed",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "completion",
    label: "COMPLETION",
  },
];

export default function TableTemplate() {
  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}