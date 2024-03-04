import { createContext, useState, useEffect, useLayoutEffect } from "react";

const ScriptContext = createContext();

let index = 0;

export function ScriptContextProvider(props) {
    const [actions, setActions] = useState([]);

    const [sliderAction, setSliderState] = useState();

    function getIndex() {
        console.log("Length of actions: " + actions.length)
        if (actions.length != 0) {
            index = actions[actions.length - 1].data.value + 1;
            console.log("last index: " + actions[actions.length - 1].data.value)
        }
        else {
            index = 0;
            console.log("Index: " + index)
        }
    }

    useEffect(() => {
        console.log("Use Effect sliderAction" + JSON.stringify(sliderAction));
        if (sliderAction != null) {
            setActions([
                ...actions,
                sliderAction
            ]
            )
        }

    }, [sliderAction])

    useEffect(() => {
        console.log("Use Effect actions" + JSON.stringify(actions));
    }, [actions])

    // const sliderState = {
    //     actionType: "slider",
    //     value: null,
    //     action: {
    //         val1: null, val2: null, val3: null, val4: null, val5: null
    //     }
    // }

    // function addSliderAction(sliderData) {
    //     let newSliderData = {
    //         actionType: "slider",
    //         value: null,
    //         action: {
    //             val1: sliderData.servo1, val2: sliderData.servo2, val3: sliderData.servo3, val4: sliderData.servo4, val5: sliderData.servo5
    //         }
    //     }

    //     console.log("newSliderData Obj: " + JSON.stringify(newSliderData))
    //     setSliderState(sliderAction => ({
    //         ...sliderAction,
    //         ...newSliderData
    //     }));
    //     console.log("New Script Data: " + JSON.stringify(sliderAction))
    //     actions.push(sliderAction)
    //     console.log(actions)
    // }

    function addSliderAction(sliderData) {
        getIndex();
        let data = {
            actionType: "slider",
            value: index,
            action: {
                val1: sliderData.servo1, val2: sliderData.servo2, val3: sliderData.servo3, val4: sliderData.servo4, val5: sliderData.servo5
            }
        }
        setSliderState((previousState) => ({
            ...previousState,
            data
        }));
        console.log("Current slider state: " + JSON.stringify(sliderAction));

        // actions.push(sliderAction)
        console.log("Actions: " + JSON.stringify(actions))
        console.log(sliderAction);
    }

    const context = {
        addSliderData: addSliderAction,
        sliderAction: sliderAction,
        actions: actions,
    };
    return (
        <ScriptContext.Provider value={context}>
            {props.children}
        </ScriptContext.Provider>
    );
}

export default ScriptContext;