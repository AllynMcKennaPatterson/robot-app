import { createContext, useState, useEffect, useLayoutEffect } from "react";

const ModelContext = createContext();

export function ModelContextProvider(props) { 
    const defaultModel = {
        bone1Rotation: [0, 0, 0],
        bone2Rotation: [0, 0, 0],
        baseRotation: [0, 0, 0],
    }
    const [modelState, setModelState] = useState(defaultModel);
    const [showTargetBlock, setShowTargetBlock] = useState(false);

    function editModelState(command) {
        if (command.joint === "joint1") {
            setModelState((previousState) => {
                const newState = JSON.parse(JSON.stringify(previousState))
                newState.bone1Rotation = [command.angle, 0, 0]
                return newState;
            })
        }
        if (command.joint === "joint2") {
            setModelState((previousState) => {
                const newState = JSON.parse(JSON.stringify(previousState))
                console.log("NewState" + newState.bone2Rotation)
                newState.bone2Rotation = [command.angle, 0, 0]
                return newState;
            })
        }
        if (command.joint === "joint5") {
            setModelState((previousState) => {
                const newState = JSON.parse(JSON.stringify(previousState))
                console.log("NewState" + newState.baseRotation)
                newState.baseRotation = [0, command.angle, 0]
                return newState;
            })
        }
    }

    function toggleTargetBlock(){
        setShowTargetBlock(!showTargetBlock);
        console.log(showTargetBlock);
    }

    const context = {
        theModelData: modelState,
        targetBlock: showTargetBlock,
        updateModelState: editModelState,
        toggleTargetBlock: toggleTargetBlock,
    };
    return (
        <ModelContext.Provider value={context}>
            {props.children}
        </ModelContext.Provider>
    );
}

export default ModelContext;