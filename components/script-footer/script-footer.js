import { useState } from "react";
import classes from "./script-footer.module.css";

function ScriptFooter() {
  const [openFooter, setOpenFooter] = useState(false);

  function handleToggle(){
    console.log("Clicked")
    setOpenFooter(!openFooter)
  }
  if(openFooter == true){
    return (
    <div className={classes.footerContainer}>
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