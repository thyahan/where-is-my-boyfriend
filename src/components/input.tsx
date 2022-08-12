import { InputHTMLAttributes, FC } from "react";
import classNames from "classnames";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  theme?: "dark" | "light";
};

const Input: FC<Props> = (props) => {
  return <input {...props} className={classNames("uui-input", props.theme === "dark" ? "uui-input-dark" : "", props.className)} />;
};

export default Input;
