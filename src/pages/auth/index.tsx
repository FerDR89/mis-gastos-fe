import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserEmail, setToken } from "../../lib/reducers/user-reducer";
import { getToken } from "../../lib/API";
import { Text, Stack } from "@chakra-ui/react";
import MyLogin from "../../components/login/index";

export default function Auht() {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const code = e.target.code.value;
    const token = await getToken(userEmail, code);
    if (token) {
      if (token.message === "Unauthorized") {
        alert("Error: vuelva a intentarlo");
      } else {
        dispatch(setToken(token));
        navigate("/home");
      }
    }
  };

  useEffect(() => {
    if (!userEmail) {
      navigate("/");
    }
  }, [userEmail]);

  return userEmail ? (
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
          pl={["10px", "45px"]}
          color={"subTitleColor"}
          fontFamily={"Montserrat, sans-serif"}
          fontSize={"16px"}
        >
          Por favor, ingresa el código de validación que recibiste en el correo
          que nos brindaste para poder acceder
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
          labelText="Código"
          holder="Ingresá aquí tu código"
          name="code"
          type="number"
          onSubmited={handleSubmit as any}
        />
      </Stack>
    </Stack>
  ) : null;
}
