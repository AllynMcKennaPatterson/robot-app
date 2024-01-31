import { useContext } from "react";
import classes from "./virtual-object-button.module.css";
import ModelContext from "@/pages/Store/modelContext";

function VirtualObjectButton() {

  const modelState = useContext(ModelContext);

  function clickHandler() {
    modelState.toggleTargetBlock()
  }

  return (
    <div className={classes.controlContainer} onClick={clickHandler}>
      <div className={classes.buttonContent}>
        <img src="/assets/images/control-buttons/virtual-object-icon.svg" />
      </div>
    </div>
  );
}

export default VirtualObjectButton;
