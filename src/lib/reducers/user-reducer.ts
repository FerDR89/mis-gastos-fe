import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    token: "",
  },
  reducers: {
    setEmail: (state, action) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

//INVESTIGAR Y MODIFICAR LOS ERRORES DE TYPE
const selectUserEmail = (state: any) => state.user.email;
const selectUserToken = (state: any) => state.user.token;

export const { setEmail, setToken } = userSlice.actions;
export { selectUserEmail, selectUserToken };
export default userSlice.reducer;
