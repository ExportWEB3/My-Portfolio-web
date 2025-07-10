import { useContext } from "react";
import { layoutAttributes } from "../utilities/typedeclaration";
import { ToastComponent } from "./Toast/toast";
import { GlobalUseContext } from "../context/context";

export function PublicLayout({ children }: layoutAttributes) {
  const { state, dispatch } = useContext(GlobalUseContext);

  return (
    <div className="width100 height100 flex flex-column">
      {state?.isToastState?.state && <ToastComponent />}
      {children}
    </div>
  );
}
