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

  const sectionTitle = <h2 className="mb-3 text-2xl font-semibold">{btnTitle}</h2>;

  return (
    <>
      <Button
        onClick={() => onOpen()}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        {sectionTitle}
        <p className="m-0 max-w-[30ch] text-sm opacity-50">{btnBody}</p>
      </Button>
      <Modal
        className="flex inset-0 w-[60%] bg-black m-8"
        size={size}
        isOpen={isOpen}
        onClose={onClose}
      >
        {/* TODO: Move "X" button to the top right of the modal */}
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
