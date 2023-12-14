import classes from "./header.module.css";
import NavButton from "../nav-buttons/nav-buttons";
import Link from "next/link";

function Header() {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.navContainer}>
        <Link href={"./"} className={classes.buttonLink}>
          <NavButton text={"Home"} />
        </Link>
            <img src="assets/images/ModuGrip-Logo.svg" alt="ModuGrip Logo" className={classes.logo}/>
        <div className={classes.authButtons}>
          <Link href={"./login"} className={classes.buttonLink}>
            <NavButton text={"Log In"} className={classes.button}/>
          </Link>
          <div className={classes.divider}/>
          <Link href={"/signup"} className={classes.buttonLink}>
            <NavButton text={"Sign Up"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
