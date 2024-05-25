import Image from "next/image";
import ModalTemplate from "./components/modalTemplate";



export default function Home() {
  // TODO : Move these to a different file - Temporary
  const btnTitleRaidRanking = "Raid Ranking";
  const btnBodyRaidRanking = "What would your rank  be if you killed the boss right now?";

  const btnTitleMythicTitle = "Mythic+ Title";
  const btnBodyMythicTitle = "Push yourself to the max and reach the top 1%!";

  const btnTitleHighestRating = "Highest IO";
  const btnBodyHighestRating = "Who are the best Mythic+ players?";

  const btnTitleHighestKey = "Best Timed Keys";
  const btnBodyHighestKey = "Find out the current highest timed key.";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Season 4 is ending on&nbsp;
        <code className="font-mono font-bold">August 18th</code>
      </p>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/wow-info2.png"
          alt="Wow info Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <ModalTemplate btnTitle={btnTitleRaidRanking} btnBody={btnBodyRaidRanking}/>
        <ModalTemplate btnTitle={btnTitleMythicTitle} btnBody={btnBodyMythicTitle}/>
        <ModalTemplate btnTitle={btnTitleHighestRating} btnBody={btnBodyHighestRating}/>
        <ModalTemplate btnTitle={btnTitleHighestKey} btnBody={btnBodyHighestKey}/>
      </div>
    </main>
  );
}
