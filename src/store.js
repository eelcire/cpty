import React, { useReducer, createContext } from "react";

export const ADD_DONATION = "addDonation";
export const ERROR = "error";
export const RESET_DONATED = "resetDonated";

const initialState = {
  totalFund: 0,
  donors: 11,
  error: undefined,
  donated: false,
  setBackground: false,
};

export const StoreContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_DONATION:
      return {
        ...state,
        totalFund: state.totalFund + action.value,
        donors: state.donors + 1,
        error: undefined,
        setBackground: true,
        donated: true,
      };
    case RESET_DONATED:
      return {
        ...state,
        donated: false,
      };
    case ERROR:
      return { ...state, error: action.error };
    default:
      throw new Error("reducer error");
  }
};

export const StoreContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
