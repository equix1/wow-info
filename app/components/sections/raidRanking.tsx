import { Card, CardBody, Divider, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import { TabsRaidRanking } from "../tabs";

export default function RaidRanking() {

  // TODO : Add database information instead of static - Temporary
  const raids = [
    {
      id: 1,
      slug: "voti",
      name: "Vault of the Incarnate",
      bosses: [
        {
          id: 1,
          name: "Eranog",
          rank: 470,
        },
        {
          id: 2,
          name: "Terros",
          rank: 360,
        },
        {
          id: 3,
          name: "Primal Council",
          rank: 390,
        },
        {
          id: 4,
          name: "Dathea",
          rank: 270,
        },
        
      ]
    },
    {
      id: 2,
      slug: "abbe",
      name: "Abberus",
      bosses: [
        {
          id: 1,
          name: "Kazara",
          rank: 490,
        },
        {
          id: 2,
          name: "Assault of Zaqali",
          rank: 240,
        },
      ]
    },
    {
      id: 3,
      slug: "amir",
      name: "Amirdrassil",
      bosses: [
        {
          id: 1,
          name: "Gnarlroot",
          rank: 390,
        },
        {
          id: 2,
          name: "Igira",
          rank: 100,
        },
      ]
    },
  ];

  return (
    <TabsRaidRanking raids={raids} />
  );
}
