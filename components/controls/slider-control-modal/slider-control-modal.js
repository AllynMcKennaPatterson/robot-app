import { useContext, useEffect, useState } from "react";
import classes from "./slider-control-modal.module.css";
import GlobalContext from "../../../pages/Store/globalContext";
import ModelContext from "@/pages/Store/modelContext";

function SliderControlModal(props) {
  if (!props.open) return null;

  const [val1, setVal1] = useState(90);
  const [val2, setVal2] = useState(90);
  const [val3, setVal3] = useState(90);
  const [val4, setVal4] = useState(90);
  const [val5, setVal5] = useState(90);
  const globalCtx = useContext(GlobalContext);
  const modelState = useContext(ModelContext);

  async function actionHandler() {
    const action = {
      servo1: val1,
      servo2: val2,
      servo3: val3,
      servo4: val4,
      servo5: val5,
    };

    console.log("Action:" + JSON.stringify(action));
    modelState.updateModelState({ joint: "joint1", angle: (val1 * (Math.PI/180)) })
    await globalCtx.publishAngles(action);
  }

  function updateVal(command){
    switch(command.value){
      case val1:
        modelState.updateModelState({ joint: "joint1", angle: (command.angle * (Math.PI/180))})
        setVal1(command.angle)
        break;
    } 
  }

  return (
    <div className={classes.modalContainer}>
      <div className={classes.header}>
        <div></div>
        <h3 className={classes.title}>Joint Control</h3>
        <h2 className={classes.close} onClick={props.onClose}>
          x
        </h2>
      </div>
      <div className={classes.divider}></div>
      <div className={classes.slidersContainer}>
        <div className={classes.sliders}>
          <h3 className={classes.jointLabel}>J1</h3>
          <input
            type="range"
            min="0"
            max="180"
            defaultValue="90"
            id="typeinp"
            className={classes.slider}
            onChange={
              (event) => updateVal({angle: event.target.value, value: val1})
            }
          ></input>
          <p className={classes.value}>{val1}</p>
        </div>
        <div className={classes.sliders}>
          <h3 className={classes.jointLabel}>J2</h3>
          <input
            type="range"
            min="0"
            max="180"
            defaultValue="90"
            className={classes.slider}
            onChange={(event) => setVal2(event.target.value)}
          ></input>
          <p className={classes.value}>{val2}</p>
        </div>
        <div className={classes.sliders}>
          <h3 className={classes.jointLabel}>J3</h3>
          <input
            type="range"
            min="0"
            max="180"
            defaultValue="90"
            className={classes.slider}
            onChange={(event) => setVal3(event.target.value)}
          ></input>
          <p className={classes.value}>{val3}</p>
        </div>
        <div className={classes.sliders}>
          <h3 className={classes.jointLabel}>J4</h3>
          <input
            type="range"
            min="0"
            max="180"
            defaultValue="90"
            className={classes.slider}
            onChange={(event) => setVal4(event.target.value)}
          ></input>
          <p className={classes.value}>{val4}</p>
        </div>
        <div className={classes.sliders}>
          <h3 className={classes.jointLabel}>J5</h3>
          <input
            type="range"
            min="0"
            max="180"
            defaultValue="90"
            className={classes.slider}
            onChange={(event) => setVal5(event.target.value)}
          ></input>
          <p className={classes.value}>{val5}</p>
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

export default SliderControlModal;
