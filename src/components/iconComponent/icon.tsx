import { iconAttributes } from "../../utilities/typedeclaration";

export function Icon(props: iconAttributes) {
  const { icon, className } = props;
  return <i className={`cursor-pointer ${icon} ${className}`}></i>;
}
