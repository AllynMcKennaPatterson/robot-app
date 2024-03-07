import { useContext, useEffect, useState } from "react";
import classes from "./delay-modal.module.css";
import GlobalContext from "../../../pages/Store/globalContext";
import ModelContext from "@/pages/Store/modelContext";
import ScriptContext from "@/pages/Store/scriptContext";

function DelayModal(props) {
  if (!props.open) return null;

  return (
    <div className={classes.modalContainer}>
        test
    </div>
  );
}

export default DelayModal;
