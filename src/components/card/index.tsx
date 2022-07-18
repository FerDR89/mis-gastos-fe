import format from "date-fns/format";
import css from "./index.module.css";
import { Flex, HStack, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ModalEditCard from "../modalCard";

type cardProps = {
  cardBG: string;
  title: string;
  amount: number;
  type: string;
  modalTitle: string;
  inputName: string;
  optionsArraySelect: string[];
  created: Date;
  updated?: Date;
  id: string;
  onSubmited: (e: React.FormEvent<HTMLFormElement>, id: string) => {};
  onClicked: (id: string) => {};
};

const updatedComp = (updated: Date) => {
  return (
    <Text fontFamily={"Montserrat"} fontSize="16px">
      <span className={css["span-bolder"]}>Actualizado: </span>
      {format(updated, "dd/MM/yyyy")}
    </Text>
  );
};

export default function Card({
  cardBG,
  title,
  amount,
  type,
  created,
  updated,
  id,
  optionsArraySelect,
  modalTitle,
  inputName,
  onSubmited,
  onClicked,
}: cardProps) {
  return (
    <HStack
      bgColor={cardBG}
      w={"325px"}
      h={"150px"}
      px={"10px"}
      borderRadius="15px"
      color={"whiteText"}
    >
      <Flex
        flexDir="column"
        alignItems={"flex-start"}
        justifyContent="space-evenly"
        w={"250px"}
        h={"130px"}
        color={"textWhite"}
      >
        <Text fontFamily={"Montserrat"} fontSize="16px">
          <span className={css["span-bolder"]}>{title}:</span> $ {amount}
        </Text>
        <Text fontFamily={"Montserrat"} fontSize="16px">
          <span className={css["span-bolder"]}>Tipo: </span> {type}
        </Text>
        <Text fontFamily={"Montserrat"} fontSize="16px">
          <span className={css["span-bolder"]}>Creado: </span>
          {format(created, "dd/MM/yyyy")}
        </Text>
        {updated && updatedComp(updated)}
      </Flex>
      <Flex
        flexDir="column"
        justifyContent="space-around"
        w={"50px"}
        h={"130px"}
      >
        <Box
          display={"flex"}
          flexDir="column"
          alignItems={"center"}
          justifyContent="center"
          w={"50px"}
          h={"40px"}
        >
          <ModalEditCard
            title={modalTitle}
            inputName={inputName}
            optionsArraySelect={optionsArraySelect}
            id={id}
            onSubmited={onSubmited}
          />
        </Box>
        <Box
          display={"flex"}
          flexDir="column"
          alignItems={"center"}
          justifyContent="center"
          w={"50px"}
          h={"40px"}
          cursor={"pointer"}
          onClick={() => {
            onClicked(id);
          }}
        >
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{
              width: "20px",
              height: "40px",
              color: "black",
            }}
          />
        </Box>
      </Flex>
    </HStack>
  );
}
