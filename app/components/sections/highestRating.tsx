import React, { Suspense } from "react";
import { Spinner } from "@nextui-org/react";
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
    // TODO: Add a Tab for every role(?)/class(?)/specs(?)

    // TODO: Add Suspense back when rows and columns are from a database
    // <Suspense 
    //   fallback={<Spinner label="Loading..." color="warning" />}
    // >
      <TableBase rows={rows} columns={columns}/>
    // </Suspense>
  );
}
