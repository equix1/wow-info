import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import { RaidTabsProps, BossTabsProps } from "../interface/tabs";

// TODO : Find a way to make the Tabs something reusable for Classes and Keys
// export function TabsBase({ tabInfo, children, isVertical = false }: TabsProps) {


//   return (
//     <Tabs
//       aria-label="Initial tab"
//       variant="underlined"
//       items={tabInfo}
//       className="flex flex-col w-full"
//       isVertical={isVertical}
//     >
//       {(item) => (
//         <Tab
//           key={item.id}
//           className="bg-cover bg-center py-6 w-full "
//           title={item.name}
//           style={{ backgroundImage: `url('../../favicon.ico')` }} // TODO: Add img of the raid -- Would be item.img
//         >
//           {children}
//         </Tab>
//       )}
//     </Tabs>
//   );
// }

export function TabsRaidRanking({ raids }: RaidTabsProps) {
  // TODO: Fetch data and modify TabsProps

  return (
    <Tabs aria-label="Raid tabs" variant="underlined" items={raids} className="flex flex-col w-full">
      {(raid) => (
        <Tab key={raid.id}
          className="bg-cover bg-center py-6 w-full "
          title={raid.name}
          style={{ backgroundImage: `url('../../favicon.ico')` }} // TODO: Add img of the raid -- Would be item.img
        >
          <BossTabs raid={raid} />
        </Tab>
      )}
    </Tabs>
  )
}

function BossTabs({ raid }: BossTabsProps) {
  return (
    <Tabs aria-label="Boss Tabs" variant="underlined" items={raid.bosses} isVertical={true} >
      {(boss) => (
        <Tab
          key={boss.id}
          title={boss.name}
          style={{ backgroundImage: `url('../../favicon.ico')` }} // TODO: Add img of the raid
          className="w-full"
        >
          <div className="text-center justify-center">
            {boss.rank}
          </div>
        </Tab>
      )}
    </Tabs>
  )
}


