import React,{ useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {
    const INITIAL_STATE = [
        
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE)

    const addBox = (newBox) => {
        setBoxes(boxes => (
            [...boxes, {...newBox}]
        ))

    }
   
    const removeBox = (idx) => {
        /* const removedBoxes = boxes.splice(idx, 1) */
        setBoxes(boxes => (
            boxes.filter((box, i) => (i !== idx))
        ))
        
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            <div className="boxContainer">
            {boxes.map((box, idx) => (
                <Box removeBox={removeBox} data-testid={idx} key={idx} width={box.width} height={box.height} backgroundColor={box.backgroundColor} />
            ))}
            </div>

        </div>
    )

}

export default BoxList