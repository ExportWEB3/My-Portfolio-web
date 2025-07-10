import { useContext, useEffect } from "react";
import "./toast.css";
import { GlobalUseContext } from "../../context/context";

export function ToastComponent() {
  const { state, dispatch } = useContext(GlobalUseContext);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_TOAST", payload: { state: false, text: "" } });
    }, 3000);
  });

  const handleClose = () => {
    dispatch({ type: "CLEAR_TOAST", payload: { state: false, text: "" } });
  };

  return (
    <div className="pop   zIndex10  flex  justify-center h-screen fixed">
      <div className="popUpDiv mt-20 flex justify-center items-center relative h-full">
        <p className="popUpText">
          {state?.isToastState?.text ? state?.isToastState?.text : "Item added"}
        </p>
        <h2 onClick={handleClose} className="absolute top-0 right-0 close">
          X
        </h2>
      </div>
    </div>
  );
}
