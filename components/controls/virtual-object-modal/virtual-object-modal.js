import { useContext, useEffect, useState } from "react";
import classes from "./virtual-object-modal.module.css";
import ScriptContext from "@/pages/Store/scriptContext";
import ModelContext from "@/pages/Store/modelContext";

function VirtualObjectModal(props) {

  const modelState = useContext(ModelContext);
  
  async function scriptActionHandler() {
    console.log("Adding Virtual Object to script")
  }

  async function publishHandler(){
    console.log("Publishing Virtual Object")
    console.log(modelState.targetBlockPos)
  }

  function closeHandler() {
    props.onClose()
    modelState.toggleTargetBlock()
  }

  if (!props.open) return null;
  return (
    <div className={classes.modalContainer}>
      <div className={classes.header}>
        <div></div>
        <h3 className={classes.title}>Virtual Object</h3>
        <h2 className={classes.close} onClick={closeHandler}>
          x
        </h2>
      </div>
      <div className={classes.divider}></div>
      <div className={classes.coords}><span style={{fontWeight: "bold", marginLeft:'12px', marginRight:"4px"}}>X:</span>{modelState.targetBlockPos.x} <span style={{fontWeight: "bold", marginLeft:'12px', marginRight:"4px"}}>Y:</span>{modelState.targetBlockPos.y} <span style={{fontWeight: "bold", marginLeft:'12px', marginRight:"4px"}}>Z:</span>{modelState.targetBlockPos.z}</div>
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
