import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";

import css from "./index.module.css";

type formProps = {
  labelText: string;
  buttonText: string;
  holder: string;
  type?: string;
  name: string;
  optionsArray: string[];
  id?: string;
  onSubmited: (e: React.FormEvent<HTMLFormElement>, id: string) => {};
};

export default function ModalForm({
  labelText,
  buttonText,
  holder,
  type,
  name,
  optionsArray,
  id,
  onSubmited,
}: formProps) {
  return (
    <form className={css.form} onSubmit={(e) => onSubmited(e, id as string)}>
      <FormControl isRequired>
        <FormLabel htmlFor={name} color={"labelColor"}>
          {labelText}
        </FormLabel>
        <Input
          id={name}
          type={type || "text"}
          name={name}
          placeholder={holder}
          w={["290px", "350px"]}
          h={"45px"}
          borderColor="borderColor"
          color={"blackText"}
          _placeholder={{
            color: "borderColor",
            fontFamily: "Montserrat, sans-serif",
          }}
          variant="outline"
          fontFamily={"Montserrat, sans-serif"}
          _hover={{
            borderColor: "borderColor",
            boxShadow: "0 0 0 1px borderColor",
            backgroundColor: "transparent",
          }}
          tabIndex={1}
        />
        <FormLabel marginTop="10px" htmlFor="select" color={"labelColor"}>
          Elegí una categoría:
        </FormLabel>
        <Select
          name="select"
          borderColor="borderColor"
          variant="outline"
          color={"blackText"}
          fontFamily={"Montserrat, sans-serif"}
          className={css.select}
          _placeholder={{
            color: "borderColor",
            fontFamily: "Montserrat, sans-serif",
          }}
          _hover={{
            borderColor: "borderColor",
            boxShadow: "0 0 0 1px borderColor",
            backgroundColor: "transparent",
          }}
        >
          {optionsArray.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="outline"
        w={["290px", "350px"]}
        h={"45px"}
        fontFamily={"Montserrat, sans-serif"}
        fontWeight="500"
        color={"blackText"}
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
      >
        {buttonText}
      </Button>
    </form>
  );
}
