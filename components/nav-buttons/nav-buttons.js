import classes from "./nav-buttons.module.css"

function NavButton(props){
    return(
       <div className={classes.buttonContainer}>
        <div className={classes.buttonContent}>
           <h3 className={classes.buttonText}>{props.text} 
            </h3>
        </div>
        
    </div> 
    )
    
}

export default NavButton 