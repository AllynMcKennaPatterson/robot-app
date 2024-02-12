import { createContext, useState, useEffect, useLayoutEffect } from "react";

const ScriptContext = createContext();

export function ScriptContextProvider(props) { 
    const actions = []

    const [sliderState, setSliderState] = useState(defaultModel);


    const sliderAction = {
        "actionType": "slider",
        "value": null,
        "action": {
                    "val1": null, "val2": null, "val3": null, "val4": null, "val5": null
                }
    }

    function addSliderAction(sliderData){
        setSliderState((previousState) => {
                const newState = JSON.parse(JSON.stringify(previousState))
                newState.sliderAction.action.val1 = sliderData.val1;
                newState.sliderAction.action.val2 = sliderData.val2;
                newState.sliderAction.action.val3 = sliderData.val3;
                newState.sliderAction.action.val4 = sliderData.val4;
                newState.sliderAction.action.val5 = sliderData.val5;
                console.log("Slider Action Obj: " + JSON.stringify(sliderAction))
                return newState;
            })
    }

    return (
        <ScriptContext.Provider value={context}>
            {props.children}
        </ScriptContext.Provider>
    );
}

export default ScriptContext;