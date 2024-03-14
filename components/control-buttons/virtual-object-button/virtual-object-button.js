import { useContext } from "react";
import classes from "./virtual-object-button.module.css";
import ModelContext from "@/pages/Store/modelContext";

function VirtualObjectButton(props) {

  const modelState = useContext(ModelContext);

  function clickHandler() {
    props.setOpenObjectModal(true)
    props.setOpenSliders(false)
    props.setOpenCoordinateModal(false)
    props.setOpenDelayModal(false)
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
