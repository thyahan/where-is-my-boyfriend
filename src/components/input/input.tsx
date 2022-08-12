import { InputHTMLAttributes, FC } from "react";
import style from "./index.module.css";
import classNames from "classnames";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  theme?: "dark" | "light";
};

const Input: FC<Props> = (props) => {
  return <input {...props} className={classNames(style.input, style[props.theme], props.className)} />;
};

export default Input;
