import { useState } from "react";
import classes from "./script-icon.module.css";

function ScriptIcon(props) {
  
  function toggleModal(){
    props.setIndex(props.action.data.value);
    props.setOpenActionModal(true);
  }

  if (props.type === "slider") {
    return (
      <div>
        <div className={classes.container} onClick={toggleModal}>
        <div className={classes.iconContainer}>
          <img
            className={classes.icon}
            src="/assets/images/control-icons/slider-icon-alt.svg"
          />
        </div>
      </div>
      </div>
    );
  } else if (props.type === "endEffector") {
    return (
      <div >
        <div className={classes.container} onClick={toggleModal}>
        <div className={classes.iconContainer}>
          <img
            className={classes.icon}
            src="/assets/images/control-icons/end-effector-icon-alt.svg"
          />
        </div>
      </div>
      </div>
    );
  } else if (props.type === "delay") {
    return (
      <div>
        <div
        className={classes.arrowContainer}
        style={{ width: (props.action.data.action/2) + "px" }}
      >
        <div
          className={classes.arrow}
          style={{ width: Number(props.action.data.action/2) + 30 + "px" }}
        >
          <div
            className={classes.line}
            style={{ width: Number(props.action.data.action/2) - 30 + "px" }}
          >
            <div style={{ marginTop: 10 }}>{props.action.data.action}ms</div>
          </div>
          <div className={classes.point}></div>
        </div>
      </div>
      </div>
    );
  }
}
{
}
export default ScriptIcon;
