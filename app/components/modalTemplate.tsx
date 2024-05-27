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
import TableTemplate from "./tableTemplate";

export default function ModalTemplate({ btnTitle, btnBody }: ModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = "5xl";

  const sectionTitle = <span className="text-2xl font-semibold">{btnTitle}</span>;

  return (
    <>
      <Button
        onClick={() => onOpen()}
        variant="light"
        size="lg"
        className="flex flex-col items-center text-center h-full whitespace-normal px-5 py-4"
      >
        {sectionTitle}
        <p className="max-w-[30ch] text-sm opacity-50">{btnBody}</p>
      </Button>
      <Modal
        className="flex inset-0 w-[60%] bg-black m-8"
        size={size}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
            <>
              <ModalHeader className="flex flex-col items-center justify-center gap-1 rounded-lg">
              {sectionTitle}
              </ModalHeader>
              <ModalBody>
                <TableTemplate/>
              </ModalBody>
            </>
        </ModalContent>
      </Modal>
    </>
  );
}
