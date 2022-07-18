import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user-reducer";
import incomesReducer from "./reducers/incomes-reducer";
import expensesReducer from "./reducers/expenses-reducer";

export default configureStore({
  reducer: {
    user: userReducer,
    incomes: incomesReducer,
    expenses: expensesReducer,
  },
});
