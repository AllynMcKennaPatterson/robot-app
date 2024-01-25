import { useContext, useEffect, useState } from "react";
import classes from "./end-effector-control-modal.module.css";
import GlobalContext from '../../../pages/Store/globalContext';
/*
  TODO: I will probably need to save val1, val2, and v3 in context
        so they don't reset to 0 when the model is reopened
*/
function EndEffectorControlModal(props) {
  if (!props.open) return null;

  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  const globalCtx = useContext(GlobalContext);

  async function actionHandler(){
    const action = {
      x: val1,
      y: val2,
      z: val3,
    };
    console.log("Action:" + JSON.stringify(action));
    await globalCtx.publishCoords(action);
  }

  return (
    <div className={classes.modalContainer}>
      <div className={classes.header}>
        <div></div>
        <h3 className={classes.title}>End Effector Control</h3>
        <h2 className={classes.close} onClick={props.onClose}>
          x
        </h2>
      </div>
      <div className={classes.divider}></div>
      <div className={classes.slidersContainer}>
        <div className={classes.sliders}>
        <div className={classes.triangleLeft}
            onClick={() => val1 > -20 ? setVal1(val1-1): setVal1(val1)}></div>
        <p className={classes.value}>X: {val1}</p>
        <div className={classes.triangleRight}
        onClick={() => val1 < 20 ? setVal1(val1+1): setVal1(val1)}></div>
      </div>
      <div className={classes.sliders}>
        <div className={classes.triangleLeft}
        onClick={() => val2 > -20 ? setVal2(val2-1): setVal2(val2)}></div>
        <p className={classes.value}>Y: {val2}</p>
        <div className={classes.triangleRight}
        onClick={() => val2 < 20 ? setVal2(val2+1): setVal2(val2)}></div>
      </div>
      <div className={classes.sliders}>
        <div className={classes.triangleLeft}
        onClick={() => val3 > 0 ? setVal3(val3-1): setVal3(val3)}></div>
        <p className={classes.value}>Z: {val3}</p>
        <div className={classes.triangleRight}
        onClick={() => val3 < 20 ? setVal3(val3+1): setVal3(val3)}></div>
      </div>
      </div>
      
      <div className={classes.buttonContainer} onClick={actionHandler}>
        <div className={classes.buttonContent}>
          <h3 className={classes.buttonText}>Publish</h3>
        </div>
      </div>
    </div>
  );
}

export default EndEffectorControlModal;
