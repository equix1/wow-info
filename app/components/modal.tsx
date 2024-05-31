"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ModalProps from "../interface/modal";
import RaidRanking from "./sections/raidRanking";
import MythicTitle from "./sections/mythicTitle";
import HighestRating from "./sections/highestRating";
import BestKey from "./sections/bestKey";

export default function ModalBase({ btnName, btnBody }: ModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sectionName = <span className="text-2xl font-semibold">{btnName}</span>;

  // TODO : Find a cleaner way to do this using the button onClick instead of static string in case
  const componentToRender = () => {
    switch(btnName) {
      case "Raid Ranking"   : return <RaidRanking />;
      case "Mythic+ Title"  : return <MythicTitle />;
      case "Highest IO"     : return <HighestRating />;
      case "Best Timed Keys": return <BestKey />;
    }
  }

  return (
    <>
      <Button
        onClick={() => onOpen()}
        variant="light" // Makes the button have no background
        size="lg"
        className="flex flex-col h-full whitespace-normal px-5 py-4"
      >
        {sectionName}
        <p className="text-sm opacity-50">{btnBody}</p>
      </Button>
      <Modal
        className="bg-black p-5 h-[70%] border border-blue-800"
        placement="center"
        size="5xl"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          <ModalHeader className="justify-center underline">
            {sectionName}
          </ModalHeader>
          <ModalBody>
            { componentToRender() }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
