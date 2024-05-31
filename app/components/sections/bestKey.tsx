import React, { Suspense } from "react";
import { Spinner } from "@nextui-org/react";
import TableBase from "../table";

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
  return (
    // TODO: Add a Tab for every key

    // TODO: Add Suspense back when rows and columns are from a database
    // <Suspense 
    //   fallback={<Spinner label="Loading..." color="warning" />}
    // >
      <TableBase rows={rows} columns={columns}/>
    // </Suspense>
  );
}
