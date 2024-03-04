import { useContext, useState } from "react";
import classes from "./script-footer.module.css";
import ScriptIcon from "../script-icons/script-icon";
import ScriptContext from "@/pages/Store/scriptContext";
import ActionModal from "../action-modal/action-modal";

function ScriptFooter(props) {
  const scriptCtx = useContext(ScriptContext);
  const [openFooter, setOpenFooter] = useState(false);
  const [openActionModal, setOpenActionModal] = useState(false);
  const [index, setIndex] = useState(0);
  
  const actions = scriptCtx.actions;
  console.log("Actions from ctx: " + JSON.stringify(actions))
  const action = [
      {
        "icon":"slider"
      }, 
      {
        "icon": "delay",
        "value": "400",
      }, 
      {
        "icon":"endEffector"
      },
      {
        "icon":"slider"
      }, 
      {
        "icon": "delay",
        "value": "500",
      }, 
      {
        "icon":"endEffector"
      },
      {
        "icon": "delay",
        "value": "700",
      }, 
      {
        "icon":"slider"
      }];

  function handleToggle(){
    console.log(JSON.stringify(actions))
    setOpenFooter(!openFooter)
    console.log("Index " + index);
  }
  if(openFooter == true){
    return (
      <div>
      {actions.length == 0 ? null : <ActionModal open={openActionModal} action={actions[index].data} index={index} actionType={actions[index].data.actionType} onClose={() => setOpenActionModal(false)} />}
    <div className={classes.footerContainer}>
      
      <div className={classes.scriptContainer}>
      <ul className={classes.list}>
        {actions.map((action) => (
          <li className={classes.postContainer}>
            <ScriptIcon type={action.data.actionType} value={action.value} action={action} setOpenActionModal={() => setOpenActionModal(true) }  
            setIndex={() => setIndex(action.data.value)}></ScriptIcon>
          </li>
        ))}
      </ul>
      </div>
      
      <div className={classes.triangleDown}
        onClick={handleToggle}></div>
      </div>
      </div>
    );
  }
  else{
    return (
      <div className={classes.footerContainerClosed}>
        <p className={classes.title}>Script</p>
        <div className={classes.triangleUp}
          onClick={handleToggle}></div>
        </div>
      );
  }
  
}

export default ScriptFooter;