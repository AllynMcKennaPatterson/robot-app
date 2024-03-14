import { useContext, useEffect, useState } from "react";
import classes from "./virtual-object-modal.module.css";
import ScriptContext from "@/pages/Store/scriptContext";

function VirtualObjectModal(props) {

  async function scriptActionHandler() {
    console.log("Adding Virtual Object to script")
  }

  async function publishHandler(){
    console.log("Publishing Virtual Object")
  }

  if (!props.open) return null;
  return (
    <div className={classes.modalContainer}>
      <div className={classes.header}>
        <div></div>
        <h3 className={classes.title}>Virtual Object</h3>
        <h2 className={classes.close} onClick={props.onClose}>
          x
        </h2>
      </div>
      <div className={classes.divider}></div>
      <div className={classes.buttonContainer} onClick={publishHandler}>
        <div className={classes.buttonContent}>
          <h3 className={classes.buttonText}>Publish</h3>
        </div>
      </div>
      <div className={classes.scriptButtonContainer} onClick={scriptActionHandler}>
        <div className={classes.scriptButtonContent}>
          <h3 className={classes.scriptButtonText}>Add To Script</h3>
        </div>
      </div>
    </div>
  );
}

export default VirtualObjectModal;
