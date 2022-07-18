import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

import css from "./index.module.css";

type formProps = {
  labelText: string;
  buttonText: string;
  holder: string;
  type?: string;
  name: string;
  onSubmited?: () => {};
};

export default function MyLogin({
  labelText,
  buttonText,
  holder,
  type,
  name,
  onSubmited,
}: formProps) {
  return (
    <form className={css.form} onSubmit={onSubmited}>
      <FormControl isRequired>
        <FormLabel htmlFor={name} color={"labelColor"}>
          {labelText}
        </FormLabel>
        <Input
          id={name}
          type={type || "text"}
          name={name}
          placeholder={holder}
          borderColor="borderColor"
          color={"whiteText"}
          _placeholder={{
            color: "whiteText",
            fontFamily: "Montserrat, sans-serif",
          }}
          variant="outline"
          fontFamily={"Montserrat, sans-serif"}
          w={["290px", "350px"]}
          h={"45px"}
          _hover={{
            borderColor: "hoverColor",
            boxShadow: "0 0 0 1px hoverColor",
            backgroundColor: "transparent",
          }}
        />
      </FormControl>
      <Button
        type="submit"
        variant="outline"
        w={["290px", "350px"]}
        h={"45px"}
        fontFamily={"Montserrat, sans-serif"}
        borderColor="borderColor"
        color={"whiteText"}
        fontWeight="500"
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
