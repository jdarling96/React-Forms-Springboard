import React,{ useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: "0",
        height: "0",
        backgroundColor: "#0f0f0f"
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => (
            {
                ...formData,
                [name]: value
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addBox({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
            id="width"
            type="range"
            min="10"
            max="200"
            name="width"
            placeholder="Box Width"
            value={formData.width}
            onChange={handleChange}
             />
             <p>{formData.width}px</p>
            
            <label htmlFor="heigth">Height</label>
            <input
            id="height"
            type="range"
            min="10"
            max="200"
            name="height"
            placeholder="Box Height"
            value={formData.height}
            onChange={handleChange}
             />
             <p>{formData.height}px</p>
            
            <label htmlFor="backgroundColor">background Color</label>
            <input
            id="backgroundColor"
            type="color"
            name="backgroundColor"
            placeholder="Box Color"
            value={formData.backgroundColor}
            onChange={handleChange}
             />
             <button>Add Box</button>
        </form>
    )

}

export default NewBoxForm