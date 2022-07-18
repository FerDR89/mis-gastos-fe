import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalForm from "../modalForm/index";

type Props = {
  title: string;
  inputName: string;
  optionsArraySelect: string[];
  id: string;
  onSubmited: (e: React.FormEvent<HTMLFormElement>, id: string) => {};
};

export default function ModalEditCard({
  title,
  inputName,
  optionsArraySelect,
  id,
  onSubmited,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        backgroundColor={"transparent"}
        type="button"
        w={"50px"}
        h={"40px"}
        border={"none"}
        _active={{
          borderColor: "none",
          backgroundColor: "none",
        }}
        _focus={{
          borderColor: "none",
          backgroundColor: "none",
        }}
        _hover={{
          borderColor: "none",
          backgroundColor: "none",
        }}
        onClick={onOpen}
      >
        <FontAwesomeIcon
          icon={faPenToSquare}
          style={{
            width: "20px",
            height: "40px",
            color: "black",
          }}
        />
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInRight"
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
              id={id}
              onSubmited={onSubmited}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
