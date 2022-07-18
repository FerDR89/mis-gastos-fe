import { Text, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail } from "../../lib/reducers/user-reducer";
import { sendCode } from "../../lib/API";
import MyLogin from "../../components/login/index";

export default function Welcome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    dispatch(setEmail(userEmail));
    if (userEmail) {
      const response = await sendCode(userEmail);
      if (response.result === true) {
        navigate("/auth");
      }
    }
  };

  return (
    <Stack
      w={"100%"}
      h={"calc(80vh - 20px)"}
      direction={["column", "row"]}
      justify={["space-evenly", "center"]}
      alignItems="center"
    >
      <Stack
        alignItems={"center"}
        justifyContent="space-between"
        h="150px"
        w={["100%", "50%"]}
      >
        <Text
          color={"titleColor"}
          fontFamily={"Orbitron, sans-serif"}
          fontSize={["40px", "44px"]}
          fontWeight={"bold"}
        >
          Mis Gastos App
        </Text>

        <Text
          color={"subTitleColor"}
          fontFamily={"Montserrat, sans-serif"}
          fontSize={["36px", "38px"]}
          fontWeight={"bold"}
        >
          Bienvenido/a
        </Text>
      </Stack>
      <Stack
        alignItems={"center"}
        justifyContent="space-between"
        h="150px"
        w={["100%", "50%"]}
      >
        <MyLogin
          buttonText="Ingresar"
          labelText="Email"
          holder="Ingresá aquí tu correo"
          type="email"
          name="email"
          //REVISAR ESTE TYPE
          onSubmited={handleSubmit as any}
        />
      </Stack>
    </Stack>
  );
}
