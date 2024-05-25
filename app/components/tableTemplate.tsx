"use client";

import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Vealpal",
    role: "Tank",
    status: "Timed",
  },
  {
    key: "2",
    name: "Vealeriadru",
    role: "DPS",
    status: "Untimed",
  },
  {
    key: "3",
    name: "Vealeriaw",
    role: "DPS",
    status: "Timed",
  },
  {
    key: "4",
    name: "Vealeria",
    role: "DPS",
    status: "Untimed",
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
    key: "status",
    label: "Completion",
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