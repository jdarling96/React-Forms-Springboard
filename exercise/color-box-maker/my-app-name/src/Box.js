import React from "react";

const Box = ({ id, width, height, backgroundColor, removeBox }) => {

    return (
        <div className="divHeader" id={id} style={{width: `${width}px`, height: `${height}px`, backgroundColor: backgroundColor}}>
            
            <button onClick={() => removeBox(id)}>X</button>
        </div>
    )
}

export default Box