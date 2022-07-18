const API_BASE_URL = "https://mis-gastos-be.herokuapp.com/";

const sendCode = async (email: string) => {
  const result = await fetch(API_BASE_URL + "auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const response = result.json();
  return response;
};

const getToken = async (email: string, code: number) => {
  const result = await fetch(API_BASE_URL + "auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });
  const response = result.json();
  return response;
};

const getAllIncomes = async (token: string) => {
  const result = await fetch(API_BASE_URL + "incomes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await result.json();
  return response.results;
};

const getAllExpenses = async (token: string) => {
  const result = await fetch(API_BASE_URL + "expense", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await result.json();
  return response.results;
};

const createIncome = async (token: string, income: number, type: string) => {
  const result = await fetch(API_BASE_URL + "incomes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ income, type }),
  });
  const response = await result.json();
  return response;
};

const updateIncome = async (
  token: string,
  income: number,
  type: string,
  incomeId: string
) => {
  const result = await fetch(API_BASE_URL + "incomes/" + incomeId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ income, type }),
  });
  const response = await result.json();
  return response;
};

const deleteIncome = async (token: string, incomeId: string) => {
  const result = await fetch(API_BASE_URL + "incomes/" + incomeId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await result.json();
  return response;
};

const createExpense = async (token: string, expense: number, type: string) => {
  const result = await fetch(API_BASE_URL + "expense", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ expense, type }),
  });
  const response = await result.json();
  return response;
};

const updateExpense = async (
  token: string,
  expense: number,
  type: string,
  expenseId: string
) => {
  const result = await fetch(API_BASE_URL + "expense/" + expenseId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ expense, type }),
  });
  const response = await result.json();
  return response;
};

const deleteExpense = async (token: string, expenseId: string) => {
  const result = await fetch(API_BASE_URL + "expense/" + expenseId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await result.json();
  return response;
};

export {
  sendCode,
  getToken,
  getAllIncomes,
  getAllExpenses,
  createIncome,
  updateIncome,
  deleteIncome,
  createExpense,
  updateExpense,
  deleteExpense,
};
