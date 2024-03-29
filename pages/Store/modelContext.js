import { createContext, useState, useEffect, useLayoutEffect } from "react";
import { Vector3 } from "three";

const ModelContext = createContext();

export function ModelContextProvider(props) { 
    const defaultModel = {
        bone1Rotation: [0, 0, 0],
        bone2Rotation: [0, 0, 0],
        baseRotation: [0, 0, 0],
    }
    const [modelState, setModelState] = useState(defaultModel);
    const [showTargetBlock, setShowTargetBlock] = useState(false);
    const [targetBlockPos, setTargetBlockPos] = useState(new Vector3(0,0,0))

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
        if (command.joint === "base") {
            setModelState((previousState) => {
                const newState = JSON.parse(JSON.stringify(previousState))
                // console.log("NewState" + newState.baseRotation)
                newState.baseRotation = [0, command.angle, 0]
                return newState;
            })
        }
    }

    function toggleTargetBlock(){
        setShowTargetBlock(!showTargetBlock);
        console.log(showTargetBlock);
    }

    function setTargetBlockPosition(position) {
        console.log("Pos: " + JSON.stringify(position))
        setTargetBlockPos((previousState) => {
            console.log("prev: " + JSON.stringify(previousState))
            let newState = JSON.parse(JSON.stringify(previousState))
            console.log("newstate: " + JSON.stringify(newState))
            newState = position
            return newState;
        })
        
        console.log("TBP from Ctx: " + JSON.stringify(targetBlockPos))
    }

    function hideTargetBlock(){
        setShowTargetBlock(false);
    }

    const context = {
        theModelData: modelState,
        targetBlock: showTargetBlock,
        targetBlockPos: targetBlockPos,
        updateModelState: editModelState,
        toggleTargetBlock: toggleTargetBlock,
        setTargetBlockPosition: setTargetBlockPosition,
        hideTargetBlock: hideTargetBlock,
    };
    return (
        <ModelContext.Provider value={context}>
            {props.children}
        </ModelContext.Provider>
    );
}

export default ModelContext;