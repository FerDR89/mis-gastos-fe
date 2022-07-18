import { InputHTMLAttributes, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserToken } from "../../lib/reducers/user-reducer";
import {
  selectAllIncomes,
  setAllIncomes,
} from "../../lib/reducers/incomes-reducer";
import { deleteIncome, getAllIncomes, updateIncome } from "../../lib/API";
import Card from "../../components/card";
import { Box, grid, VStack } from "@chakra-ui/react";

type IncomeArrayProps = {
  income: number;
  incomeId: string;
  type: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function Incomes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectUserToken);
  const incomes = useSelector(selectAllIncomes);

  const incomesSelectOptions = ["ahorros", "horas extra", "sueldo"];

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  async function submitIncome(
    e: React.FormEvent<HTMLFormElement>,
    incomeId: string
  ) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const income = parseInt(target.income.value);
    const type = target.select.value;
    if (income && type && incomeId) {
      const result = await updateIncome(token, income, type, incomeId);
      if (result.updatedIncome === true) {
        const allIncomes = await getAllIncomes(token);
        allIncomes && dispatch(setAllIncomes(allIncomes));
        alert("Su ingreso ha sido actualizado con éxito");
      } else {
        alert(result.message);
      }
    }
  }

  async function removeIncome(incomeId: string) {
    if (incomeId) {
      const result = await deleteIncome(token, incomeId);
      if (result.deletedIncome === true) {
        const allIncomes = await getAllIncomes(token);
        allIncomes && dispatch(setAllIncomes(allIncomes));
        alert("Su ingreso ha sido elminado con éxito");
      } else {
        alert(result.message);
      }
    }
  }

  return token && incomes ? (
    <Box
      m="0px"
      py={"20px"}
      px={"10px"}
      minH={"calc(80vh - 20px)"}
      w={"100%"}
      display={["flex", "grid"]}
      gridTemplateColumns={"repeat(auto-fit, minmax(335px, 1fr))"}
      justifyItems={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      rowGap={["10px", "20px"]}
    >
      {incomes.map((income: IncomeArrayProps) => {
        return (
          <Card
            cardBG="incomeColor"
            key={income.incomeId}
            title={"Ingreso"}
            amount={income.income}
            type={income.type}
            id={income.incomeId}
            created={new Date(income.createdAt)}
            updated={income.updatedAt ? new Date(income.updatedAt) : undefined}
            inputName={"income"}
            modalTitle={"Actualizar ingreso"}
            optionsArraySelect={incomesSelectOptions}
            onSubmited={submitIncome}
            onClicked={removeIncome}
          />
        );
      })}
    </Box>
  ) : null;
}
