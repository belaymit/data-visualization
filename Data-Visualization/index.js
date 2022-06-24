import React from 'react';
import ReactDOM from "react-dom"
import {arc} from 'd3'; 

const width = 960;
const height = 500;
const centrX = width/2;
const centrY = height/2;
const strokewidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 45;
const mouthWidth = 20;
const mouthRadius = 140;
//comment

const mouthArch = arc()
	.innerRadius(mouthRadius)
	.outerRadius(mouthRadius+mouthWidth)
	.startAngle(Math.PI/2)
	.endAngle(Math.PI*3/2)
const App = () =>{
return(
 <svg width={width} height={height}>
    <g transform = {`translate(${centrX}, ${centrY})`}>
      <circle 
      	r={centrY-strokewidth/2}
        fill="yellow"
        stroke="black"
        stroke-width={strokewidth}
              />
    <circle
      cx ={-eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      />
    <circle
      cx ={eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      />
    <path d= {mouthArch()}/>
    </g>
    </svg>
);
}; 

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);