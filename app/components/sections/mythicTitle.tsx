import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

export default function MythicTitle() {
    // TODO : Add database information instead of static - Temporary
    const tabs = [
      {
        id: "us",
        label: "America/Oceanic",
        rating: 3435,
      },
      {
        id: "eu",
        label: "Europe",
        rating: 3486,
      },
      {
        id: "tw",
        label: "Taiwan",
        rating: 3602,
      },
      {
        id: "kr",
        label: "Korea",
        rating: 3448,
      }
    ];
  
    return (
      <>
        <div className="flex flex-col items-center">The title cutoff for</div>
        <Tabs aria-label="Dynamic tabs" variant="underlined" items={tabs} className="flex flex-col w-full">
          {(item) => (
            <Tab key={item.id} className="py-6" title={item.label}>
              <div className="flex flex-col items-center p-24">
                <p className="text-5xl"> {item.rating} </p>
              </div>
            </Tab>
          )}
        </Tabs>
      </>
    );
}
