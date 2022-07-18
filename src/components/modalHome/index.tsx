import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import ModalForm from "../modalForm/index";

type Props = {
  title: string;
  inputName: string;
  optionsArraySelect: string[];
  onSubmited: (e: React.FormEvent<HTMLFormElement>, incomeId?: string) => {};
};

export default function ModalHome({
  title,
  inputName,
  optionsArraySelect,
  onSubmited,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        type="button"
        variant="outline"
        w={["140px", "350px"]}
        h={"45px"}
        fontFamily={"Montserrat, sans-serif"}
        fontWeight="500"
        color={"whiteText"}
        borderColor="borderColor"
        _active={{
          borderColor: "hoverColor",
          boxShadow: "0 0 0 1px hoverColor",
          backgroundColor: "transparent",
        }}
        _hover={{
          color: "hoverColor",
          borderColor: "hoverColor",
          boxShadow: "0 0 0 1px hoverColor",
          backgroundColor: "transparent",
        }}
        onClick={onOpen}
      >
        {title}
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalContent h={["350px", "375px"]}>
          <ModalHeader> {title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            bgColor={"whiteText"}
          >
            <ModalForm
              labelText="Monto"
              buttonText="Enviar"
              holder="$"
              type="number"
              name={inputName}
              optionsArray={optionsArraySelect}
              onSubmited={onSubmited}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
