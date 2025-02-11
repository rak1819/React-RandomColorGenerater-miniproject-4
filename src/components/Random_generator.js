import React, { useState } from 'react'
import "./style.css"
export default function Random_generator() {
    const[typeOfColor,settypeofcolor] = useState("hex");
    const[color,setcolor] = useState("#000000");
    function randomcolor(length){
        return Math.floor(Math.random()*length)
    }
    function handleCreateRandomhexColor(){
        const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor = "#"
        for(let i=0;i<6;i++){
            hexColor+=hex[randomcolor(hex.length)]
        }
        setcolor(hexColor);

    }
    function handleCreateRandomrgbColor(){
        let r = randomcolor(256)
        let g = randomcolor(256)
        let b = randomcolor(256)
        setcolor(`rgb(${r},${g},${b})`);
    }
  return (
    <div style={{
        height:"100vh",
        width:"100vw",
        background:color,

    }}>
        <button className="button-19" onClick={()=>settypeofcolor('hex')}>Hex genrate</button>
        <button  className="button-19" onClick={()=>settypeofcolor('rgb')}>RGb generate</button>

        <button className="button-19" onClick={typeOfColor==='hex'?handleCreateRandomhexColor:handleCreateRandomrgbColor}>generator</button>
    </div>
  )
}
