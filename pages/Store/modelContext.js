import { createContext, useState, useEffect, useLayoutEffect } from "react";

const ModelContext = createContext();

export function ModelContextProvider(props) {
    const defaultModel = {
        bone1Rotation: [0, 0, 0],
        bone2Rotation: [0, 0, 0],
    }
    const [modelState, setModelState] = useState(defaultModel);

    function editModelState(command) {
        if(command.joint === "joint1"){
            setModelState((previousState) => {
                const newState = JSON.parse(JSON.stringify(previousState))
                newState.bone1Rotation = [command.angle, 0, 0]
                return newState;
            })
        }
        if(command.joint === "joint2"){
            setModelState((previousState) => {
                const newState = JSON.parse(JSON.stringify(previousState))
                console.log("NewState" + newState.bone2Rotation)
                newState.bone2Rotation = [command.angle, 0, 0]
                return newState;
            })
        }
    }

    const context = {
        theModelData: modelState,
        updateModelState: editModelState,
    };
    return (
        <ModelContext.Provider value={context}>
            {props.children}
        </ModelContext.Provider>
    );
}

export default ModelContext;