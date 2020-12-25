import { Fragment } from "react";
import cn from "classnames";

import styles from "./alert.module.scss";

const Alert = ({ children, type }) => (
  <Fragment>
    <div
      className={cn({
        [styles.default]: type !== "success" && type !== "error",
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  </Fragment>
);

export default Alert;
