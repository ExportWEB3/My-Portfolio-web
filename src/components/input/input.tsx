import { inputAttributes } from "../../utilities/typedeclaration";

export function Input(props: inputAttributes) {
  const {
    displayText,
    className,
    placeHolder,
    type,
    displayType,
    onChange,
    payload,
    divClassName,
    value,
  } = props;

  const handleOnChange = (text: string) => {
    if (!onChange) return;
    onChange(text, payload);
  };

  return (
    <div
      className={`w-full h-auto flex ${
        displayType ? displayType : "flex-col"
      } ${divClassName}`}
    >
      <p>{displayText}</p>
      <input
        placeholder={placeHolder}
        type={type}
        value={value as any}
        className={`rounded-md border outline-none px-3 border-gray-300 py-2 ${className}`}
        onChange={(text) => handleOnChange(text.target.value)}
      />
    </div>
  );
}
