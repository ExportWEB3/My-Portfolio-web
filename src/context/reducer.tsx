import {
  actionAttributes,
  initialStateAttributes,
  productsAttrubutes,
  toastAttributes,
  userAttributes,
} from "../utilities/typedeclaration";

const Reducer = (state: initialStateAttributes, action: actionAttributes) => {
  switch (action.type) {
    case "STORE_USER":
      return {
        ...state,
        user: action.payload as userAttributes,
      };

    case "SET_TOAST":
      return {
        ...state,
        isToastState: action.payload as toastAttributes,
      };

    case "CLEAR_TOAST":
      return {
        ...state,
        isToastState: action.payload as toastAttributes,
      };

    case "CLEAR_USER":
      return {
        ...state,
        user: null,
      }
    default:
      return state;
  }
};

export default Reducer;
