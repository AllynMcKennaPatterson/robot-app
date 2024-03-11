import { useContext, useEffect, useState } from "react";
import classes from "./delay-modal.module.css";
import GlobalContext from "../../../pages/Store/globalContext";
import ModelContext from "@/pages/Store/modelContext";
import ScriptContext from "@/pages/Store/scriptContext";

function DelayModal(props) {
  const [delay, setDelay] = useState(0);
  const scriptCtx = useContext(ScriptContext);

  async function scriptActionHandler() {
    console.log("Delay: " + delay)
    if(delay >= 0){
      await scriptCtx.addDelayData(delay);
    }
    else{
      console.log("Delay cannot be negative")
    }
  }

  if (!props.open) return null;
  return (
    <div className={classes.modalContainer}>
      <div className={classes.header}>
        <div></div>
        <h3 className={classes.title}>Delay</h3>
        <h2 className={classes.close} onClick={props.onClose}>
          x
        </h2>
      </div>
      <div className={classes.divider}></div>
      <div className={classes.delayInputContainer}>
        <div style={{marginLeft: '8px', marginRight: '8px'}}></div>
          <input className={classes.delayInput} type="number" name="test" min={0} oninput="validity.valid||(value='');" onChange={e => setDelay(e.target.value)}/>
          <p style={{marginLeft: '8px', marginRight: '8px'}}>ms</p>
      </div>
      <div className={classes.scriptButtonContainer} onClick={scriptActionHandler}>
        <div className={classes.scriptButtonContent}>
          <h3 className={classes.scriptButtonText}>Add To Script</h3>
        </div>
      </div>
    </div>
  );
}

export default DelayModal;
