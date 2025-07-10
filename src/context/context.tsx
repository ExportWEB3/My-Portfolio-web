import { createContext, useEffect, useReducer } from "react";
import {
  globalUseContextStateAttributes,
  initialStateAttributes,
  layoutAttributes,
  productsAttrubutes,
} from "../utilities/typedeclaration";
import Reducer from "./reducer";

const intialState: initialStateAttributes = {
  user: null,
  isToastState: { state: false, text: "" },
};

export const GlobalUseContext = createContext<globalUseContextStateAttributes>({
  state: intialState,
  dispatch: () => {},
});

export const GlobalUseContextProvider = ({ children }: layoutAttributes) => {
  const [state, dispatch] = useReducer(Reducer, { ...intialState });

  return (
    <GlobalUseContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalUseContext.Provider>
  );
};
