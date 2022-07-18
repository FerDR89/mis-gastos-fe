import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserEmail,
  selectUserToken,
  setToken,
} from "../../lib/reducers/user-reducer";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function MyMenu() {
  const token: string = useSelector(selectUserToken);
  const userEmail: string = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton
        fontFamily={"Orbitron, sans-serif"}
        w={["40px", "30px"]}
        h={["40px", "30px"]}
        transition="all 0.3s"
        borderRadius="md"
        bgGradient="linear(to-r, purple.300, blue.300)"
        _hover={{ bgGradient: "linear(to-r, purple.400, blue.400)" }}
        _expanded={{ bgGradient: "linear(to-r, purple.600, blue.600)" }}
      >
        <FontAwesomeIcon
          icon={faCaretDown}
          style={{
            width: "30px",
            height: "30px",
            color: "blackText",
          }}
        />
      </MenuButton>
      <MenuList
        w={["345px", "200px"]}
        minH={"calc(80vh - 20px)"}
        display="flex"
        flexDir="column"
        justifyContent="space-around"
      >
        <MenuGroup>
          <MenuItem
            fontFamily={"Orbitron, sans-serif"}
            fontSize={"2em"}
            justifyContent={"center"}
            onClick={() => token && navigate("/home")}
          >
            Home
          </MenuItem>
          <MenuItem
            fontFamily={"Orbitron, sans-serif"}
            fontSize={"2em"}
            justifyContent={"center"}
            onClick={() => token && navigate("incomes")}
          >
            Ingresos
          </MenuItem>
          <MenuItem
            fontFamily={"Orbitron, sans-serif"}
            fontSize={"2em"}
            justifyContent={"center"}
            onClick={() => token && navigate("expenses")}
          >
            Egresos
          </MenuItem>
        </MenuGroup>
        <MenuGroup>
          <Text
            fontFamily={"Orbitron, sans-serif"}
            textAlign="center"
            fontSize={["1em", "1.3em"]}
          >
            {userEmail && userEmail}
          </Text>
          <MenuItem
            fontFamily={"Orbitron, sans-serif"}
            justifyContent={"center"}
            fontSize={["1em", "1.3em"]}
            color={"purple.500"}
            onClick={() => {
              dispatch(setToken(""));
              navigate("/");
            }}
          >
            Cerrar sesión
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
