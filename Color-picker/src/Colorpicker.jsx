import { useState } from "react"
function Colorpicker(){
const [color,setColor] = useState("affffff");
 
function handlecolorchange(event) {
    setColor(event.target.value)
}
return(<div className="color-picker-container">
    <h1>Color picker</h1>
    <div className="color-display" style={{backgroundColor:color}}>
    <p>selected color : {color} </p></div>
    <label>select a color</label>
    <input type="color" value={color} onChange={handlecolorchange()}></input>
</div>)
}
export default Colorpicker;