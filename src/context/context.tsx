import { createContext, useReducer } from "react";

import Reducer from "./reducer";
import { globalUseContextStateAttributes, initialStateAttributes, layoutAttributes } from "../utilities/typedeclaration";

const intialState: initialStateAttributes = {
  user: null,
  accessToken: "",
  isLoading : false,
};

export const GlobalUseContext = createContext<globalUseContextStateAttributes>({
  state: intialState,
});

export const GlobalUseContextProvider = ({ children }: layoutAttributes) => {
  const [state, dispatch] = useReducer(Reducer, { ...intialState });

  return (
    <GlobalUseContext.Provider
      value={{
        state,
      }}
    >
      {children}
    </GlobalUseContext.Provider>
  );
};
