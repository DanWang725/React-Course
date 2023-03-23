/*import React from 'react'
import ReactDOM from 'react-dom'
import { getSpiralStyle } from './getSpiralStyle.js'*/



function sumOf(n, fn) {
    return Array.from(Array(n).keys()).reduce((a, n) => a + fn(n), 0)
  }
  
function getSpiralStyle(n, baseSize=100, baseAngle=50*Math.PI/180) {
    let ratio = Math.sqrt(Math.tan(baseAngle)**2 + 1)/2
    
    return {
      position: 'absolute',
      width: baseSize*ratio**n,
      height: baseSize*ratio**n,
      left: '60%',
      top: sumOf(n, i => baseSize*ratio**i*Math.cos(i*baseAngle)),
      marginLeft: sumOf(n, i => -baseSize*ratio**i*Math.sin(i*baseAngle)),
      transform: `rotate(${n*baseAngle}rad)`,
      transformOrigin: 'top left',
      backgroundColor: '#61dafb',
      textAlign: 'center',
      lineHeight: baseSize*ratio**n+'px',
    }
  }
  
const createElement = React.createElement
function fizzBuzzQuestionMark(n){
    n = n+1
    if(n % 5 === 0){
        if(n % 3 === 0){
            return <strong>FizzBuzz</strong>
        }
        return <strong>Buzz</strong>
    } else if(n % 3 === 0){
        return <strong>Fizz</strong>
    }
    return n
}
let boxes = [
  <div style={getSpiralStyle(0)} key='0'>1</div>,
  <div style={getSpiralStyle(1)} key='1'>2</div>,
  <div style={getSpiralStyle(2)} key='2'>
    <strong>Fizz</strong>
  </div>,
]
for(var i = 0; i<15; i++){
    boxes[i] = <div style={getSpiralStyle(i)} key={i}>{fizzBuzzQuestionMark(i)}</div>
}

ReactDOM.render(
  boxes,
  document.getElementById('root')
)