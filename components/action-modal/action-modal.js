import classes from "./action-modal.module.css";
import { useEffect, useState } from "react";

function ActionModal(props) {
    const [data, setData] = useState();

    // useEffect(() => {
    //     setData(props.action.action.val1)
    //     // console.log("Props action " + data)
    //   }, [data])

    if (!props.open) return null;
    console.log("Props action" + data)
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div></div>
                <h3 className={classes.title}>Action {props.index + 1}</h3>
                <h2 className={classes.close} onClick={props.onClose}>
                    x
                </h2>
            </div>
            <div className={classes.divider}></div>
            <div className={classes.actionType}> <span style={{fontWeight:'600'}}>Action Type:</span> {props.actionType}</div>
            <div className={classes.angles}>
                <div className={classes.angle}>
                    <p className={classes.jointLabel}>J1:</p> <p className={classes.value}>{props.action.action.val1}</p>
                </div>
                <div className={classes.angle}>
                    <p className={classes.jointLabel}>J2:</p> <p className={classes.value}>{props.action.action.val2}</p>
                </div>
                <div className={classes.angle}>
                    <p className={classes.jointLabel}>J3:</p> <p className={classes.value}>{props.action.action.val3}</p>
                </div>
                <div className={classes.angle}>
                    <p className={classes.jointLabel}>J4:</p> <p className={classes.value}>{props.action.action.val4}</p>
                </div>
                <div className={classes.angle}>
                    <p className={classes.jointLabel}>J5:</p> <p className={classes.value}>{props.action.action.val5}</p>
                </div>
            </div>
        </div>
    );
}

export default ActionModal;
