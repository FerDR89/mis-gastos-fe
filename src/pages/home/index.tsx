import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserToken } from "../../lib/reducers/user-reducer";
import {
  createExpense,
  createIncome,
  getAllExpenses,
  getAllIncomes,
} from "../../lib/API";
import {
  selectAllIncomes,
  setAllIncomes,
} from "../../lib/reducers/incomes-reducer";
import {
  selectAllExpenses,
  setAllExpenses,
} from "../../lib/reducers/expenses-reducer";
import { Box, Flex, Text } from "@chakra-ui/react";
import MyChartPie from "../../components/myChartPie";
import ModalHome from "../../components/modalHome";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  const incomes = useSelector(selectAllIncomes);
  const expenses = useSelector(selectAllExpenses);

  const incomesSelectOptions = ["ahorros", "horas extra", "sueldo"];
  const expensesSelectOptions = [
    "almacén",
    "automotor",
    "carnicería",
    "hogar",
    "varios",
    "verdulería",
  ];

  async function getIncomes(token: string) {
    const allIncomes = await getAllIncomes(token);
    dispatch(setAllIncomes(allIncomes));
  }

  async function getExpenses(token: string) {
    const allExpenses = await getAllExpenses(token);
    dispatch(setAllExpenses(allExpenses));
  }

  //Pide la data a la API si hay un token existente sino lo redirige al login
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    getIncomes(token.token);
    getExpenses(token.token);
  }, [token]);

  // //Suman todos los incomes/expense recibidos para luego poder renderizarlos en el gráfico y los "cuadraditos"
  const sumAllIncomes = incomes
    ? incomes.reduce(
        (acc: number, income: { income: number }) => acc + income.income,
        0
      )
    : 0;

  const sumAllExpenses = expenses
    ? expenses.reduce(
        (acc: number, expense: { expense: number }) => acc + expense.expense,
        0
      )
    : 0;

  async function submitIncome(e: any) {
    e.preventDefault();
    const income = parseInt(e.target.income.value);
    const type = e.target.select.value;
    if (income && type) {
      const result = await createIncome(token.token, income, type);
      if (result.createdIncome === true) {
        getIncomes(token.token);
        alert("Su ingreso ha sido creado con éxito");
      } else {
        alert(result.message);
      }
    }
  }

  async function submitExpense(e: any) {
    e.preventDefault();
    const expense = parseInt(e.target.expense.value);
    const type = e.target.select.value;
    if (expense && type) {
      const result = await createExpense(token.token, expense, type);
      if (result.createdExpense === true) {
        getExpenses(token.token);
        alert("Su gasto fue creado con éxito");
      } else {
        alert(result.message);
      }
    }
  }

  return token ? (
    <Flex
      w={"100%"}
      h={["calc(80vh - 20px)", "600px"]}
      direction={"column"}
      justify={"space-evenly"}
      alignItems="center"
    >
      <Flex>
        <Text
          color={"titleColor"}
          fontFamily={"Orbitron, sans-serif"}
          fontSize={["40px", "44px"]}
          fontWeight={"bold"}
        >
          Mis Gastos App
        </Text>
      </Flex>

      <Flex
        flexDir={"row"}
        w={["100%", "725px"]}
        alignItems={"center"}
        justifyContent="space-between"
        margin={"0px"}
      >
        <Box>
          <Text
            color={"whiteText"}
            fontFamily={"Montserrat, sans-serif"}
            fontSize={"16px"}
            textAlign="center"
          >
            Ingresos
          </Text>
          <Flex
            w={["140px", "350px"]}
            h={"50px"}
            alignItems="center"
            justifyContent="center"
            bgColor={"incomeColor"}
          >
            <Text
              color={"whiteText"}
              fontFamily={"Montserrat, sans-serif"}
              fontSize={"16px"}
            >
              {sumAllIncomes ? `$ ${sumAllIncomes}` : null}
            </Text>
          </Flex>
        </Box>
        <Box>
          <Text
            color={"whiteText"}
            fontFamily={"Montserrat, sans-serif"}
            fontSize={"16px"}
            textAlign="center"
          >
            Egresos
          </Text>
          <Flex
            w={["140px", "350px"]}
            h={"50px"}
            alignItems="center"
            justifyContent="center"
            m="0px"
            bgColor={"expenseColor"}
          >
            <Text
              color={"whiteText"}
              fontFamily={"Montserrat, sans-serif"}
              fontSize={"16px"}
            >
              {sumAllExpenses ? `$ ${sumAllExpenses}` : null}
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex>
        <MyChartPie incomes={sumAllIncomes} expenses={sumAllExpenses} />
      </Flex>
      <Flex
        px={["10px", "0px"]}
        w={["100%", "725px"]}
        justifyContent={"space-between"}
      >
        <ModalHome
          title="Crear ingreso"
          inputName="income"
          optionsArraySelect={incomesSelectOptions}
          onSubmited={submitIncome}
        />
        <ModalHome
          title="Crear egreso"
          inputName="expense"
          optionsArraySelect={expensesSelectOptions}
          onSubmited={submitExpense as any}
        />
      </Flex>
    </Flex>
  ) : null;
}
