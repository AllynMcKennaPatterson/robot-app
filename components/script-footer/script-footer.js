import { useState } from "react";
import classes from "./script-footer.module.css";
import ScriptIcon from "../script-icons/script-icon";
import CustomScroll from "react-custom-scroll";

function ScriptFooter(props) {
  const [openFooter, setOpenFooter] = useState(false);
  const action = [
      {
        "icon":"slider"
      }, 
      {
        "icon": "delay",
        "value": "700",
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
      }];

  function handleToggle(props){
    console.log("Clicked")
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