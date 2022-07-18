import { createSlice } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    arrayExpenses: [],
  },
  reducers: {
    setAllExpenses: (state, action) => {
      return {
        ...state,
        arrayExpenses: action.payload,
      };
    },
  },
});

// //INVESTIGAR Y MODIFICAR LOS ERRORES DE TYPE
const selectAllExpenses = (state: any) => state.expenses.arrayExpenses;

export const { setAllExpenses } = expensesSlice.actions;
export { selectAllExpenses };
export default expensesSlice.reducer;
