import classes from "./end-effector-control-button.module.css";

function EndEffectorControlButton(props) {
  console.log('EndEffectorControlButton JSON.stringify(props): ' +  JSON.stringify(props))
  function clickEvent() {
    props.setOpenCoordinateModal(true)
    props.setOpenSliders(false)
    props.setOpenDelayModal(true)
  }
  return (
    <div 
      className={classes.controlContainer}
      onClick={clickEvent}
    >
      <div className={classes.buttonContent}>
        <img src="/assets/images/control-buttons/end-effector-icon.svg" />
      </div>
    </div>
  );
}

export default EndEffectorControlButton;
