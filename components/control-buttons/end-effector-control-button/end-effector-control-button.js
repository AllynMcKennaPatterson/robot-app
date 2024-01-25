import classes from "./end-effector-control-button.module.css";

function EndEffectorControlButton(props) {
  function clickEvent(){
    props.setOpenSliders(false)
    props.setOpenCoordinateModal(true)
  }
  return (

    <div className={classes.controlContainer}
      onClick={() => clickEvent()}>
      <div className={classes.buttonContent}>
        <img src="/assets/images/control-buttons/end-effector-icon.svg" />
      </div>

    </div>
  );
}

export default EndEffectorControlButton;
