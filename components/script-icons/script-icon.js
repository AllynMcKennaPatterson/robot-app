import { useState } from "react";
import classes from "./script-icon.module.css";

function ScriptIcon(props) {
  if (props.action === "slider") {
    return (
      <div className={classes.container}>
        <div className={classes.iconContainer}>
          <img
            className={classes.icon}
            src="/assets/images/control-icons/slider-icon-alt.svg"
          />
        </div>
      </div>
    );
  } else if (props.action === "endEffector") {
    return (
      <div className={classes.container}>
        <div className={classes.iconContainer}>
          <img
            className={classes.icon}
            src="/assets/images/control-icons/end-effector-icon-alt.svg"
          />
        </div>
      </div>
    );
  } else if (props.action === "delay") {
    return (
      <div
        className={classes.arrowContainer}
        style={{ width: props.value + "px" }}
      >
        <div
          className={classes.arrow}
          style={{ width: Number(props.value) + 30 + "px" }}
        >
          <div
            className={classes.line}
            style={{ width: Number(props.value) - 30 + "px" }}
          >
            <div style={{ marginTop: 10 }}>{props.value}ms</div>
          </div>
          <div className={classes.point}></div>
        </div>
      </div>
    );
  }
}
{
}
export default ScriptIcon;