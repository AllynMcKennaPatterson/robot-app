import { useContext, useState } from "react";
import classes from "./script-footer.module.css";
import ScriptIcon from "../script-icons/script-icon";
import ScriptContext from "@/pages/Store/scriptContext";

function ScriptFooter(props) {
  const scriptCtx = useContext(ScriptContext);
  const [openFooter, setOpenFooter] = useState(false);
  const actions = scriptCtx.actions;
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

  function handleToggle(props){
    // console.log("Clicked")
    console.log(JSON.stringify(actions))
    setOpenFooter(!openFooter)
  }
  if(openFooter == true){
    return (
    <div className={classes.footerContainer}>
      
      <div className={classes.scriptContainer}>
      <ul className={classes.list}>
        {action.map((action) => (
          <li className={classes.postContainer}>
            <ScriptIcon action={action.icon} value={action.value}></ScriptIcon>
          </li>
          
        ))}
      </ul>
      </div>
      
      <div className={classes.triangleDown}
        onClick={handleToggle}></div>
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