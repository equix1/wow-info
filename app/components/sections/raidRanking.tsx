import { Card, CardBody, Divider, Tab, Tabs } from "@nextui-org/react";
import React from "react";

export default function RaidRanking() {

  // TODO : Add database information instead of static - Temporary
  const tabs = [
    {
      id: "voti",
      label: "Vault of the Incarnate",
      content: [
        {
          boss: "Eranog",
          rank: 470,
        },
        {
          boss: "Terros",
          rank: 360,
        },
        {
          boss: "Eranog",
          rank: 470,
        },
        {
          boss: "Terros",
          rank: 360,
        },
      ]
    },
    {
      id: "abbe",
      label: "Abberus",
      content: [
        {
          boss: "Kazara",
          rank: 490,
        },
        {
          boss: "Assault of Zaqali",
          rank: 240,
        },
      ]
    },
    {
      id: "amir",
      label: "Amirdrassil",
      content: [
        {
          boss: "Gnarlroot",
          rank: 390,
        },
        {
          boss: "Igira",
          rank: 100,
        },
      ]
    },
  ];

  return (
    <Tabs aria-label="Dynamic tabs" variant="underlined" items={tabs} className="flex w-full flex-col">
      {(item) => (
        <Tab 
          key={item.id} 
          className="bg-cover bg-center py-6"
          title={item.label}
          style={{ backgroundImage: `url('../../favicon.ico')` }} // TODO: Add img of the raid
        >
          <Card>
            <CardBody>
              {item?.content?.map((content, index) => (
                  <div key={index} className="grid mt-2">
                    {/* TODO: Add img of the boss */}
                    <span>Boss: {content.boss}</span>
                    <span>Rank: {content.rank}</span>
                    <Divider className="my-3" />
                  </div>
              ))}
            </CardBody>
          </Card>  
        </Tab>
      )}
    </Tabs>
  );
}
