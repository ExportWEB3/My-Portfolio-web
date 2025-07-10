import { divAttributes } from "../../utilities/typedeclaration";

export function Div(props: divAttributes) {
  const { children, className, id, onClick, style } = props;
  return (
    <div className={className} id={id} onClick={onClick} style={style}>
      {children}
    </div>
  );
}
