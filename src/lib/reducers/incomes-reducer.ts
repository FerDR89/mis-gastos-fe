import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrayIncomes: [{}],
};

export const incomesSlice = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    setAllIncomes: (state, action) => {
      return {
        ...state,
        arrayIncomes: action.payload,
      };
    },
  },
});

// //INVESTIGAR Y MODIFICAR LOS ERRORES DE TYPE
const selectAllIncomes = (state: any) => state.incomes.arrayIncomes;

export const { setAllIncomes } = incomesSlice.actions;
export { selectAllIncomes };
export default incomesSlice.reducer;
