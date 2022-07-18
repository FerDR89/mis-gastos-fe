import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "../../lib/reducers/user-reducer";
import {
  selectAllExpenses,
  setAllExpenses,
} from "../../lib/reducers/expenses-reducer";
import { deleteExpense, getAllExpenses, updateExpense } from "../../lib/API";
import Card from "../../components/card";
import { Box } from "@chakra-ui/react";

type ExpenseArrayProps = {
  expense: number;
  expenseId: string;
  type: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function Expenses() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const expenses = useSelector(selectAllExpenses);
  const token = useSelector(selectUserToken);

  const expensesSelectOptions = [
    "almacén",
    "automotor",
    "carnicería",
    "hogar",
    "varios",
    "verdulería",
  ];

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  async function submitExpense(
    e: React.FormEvent<HTMLFormElement>,
    expenseId: string
  ) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const expense = parseInt(target.expense.value);
    const type = target.select.value;
    if (expense && type && expenseId) {
      const result = await updateExpense(token, expense, type, expenseId);
      if (result.updatedExpense === true) {
        const allExpenses = await getAllExpenses(token);
        allExpenses && dispatch(setAllExpenses(allExpenses));
        alert("Su egreso ha sido actualizado con éxito");
      } else {
        alert(result.message);
      }
    }
  }

  async function removeExpense(expenseId: string) {
    if (expenseId) {
      const result = await deleteExpense(token, expenseId);
      if (result.deletedExpense === true) {
        const allExpenses = await getAllExpenses(token);
        allExpenses && dispatch(setAllExpenses(allExpenses));
        alert("Su egreso ha sido elminado con éxito");
      } else {
        alert(result.message);
      }
    }
  }
  return token && expenses ? (
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
      {expenses.map((expense: ExpenseArrayProps) => {
        return (
          <Card
            cardBG="expenseColor"
            key={expense.expenseId}
            title={"Egreso"}
            amount={expense.expense}
            type={expense.type}
            id={expense.expenseId}
            created={new Date(expense.createdAt)}
            updated={
              expense.updatedAt ? new Date(expense.updatedAt) : undefined
            }
            inputName={"expense"}
            modalTitle={"Actualizar egreso"}
            optionsArraySelect={expensesSelectOptions}
            onSubmited={submitExpense}
            onClicked={removeExpense}
          />
        );
      })}
    </Box>
  ) : null;
}
