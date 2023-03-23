/*import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'*/ //not needed for preview

let billionaires = [
  { name: 'Bill Gates', email: 'billg@microsoft.com' },
  { name: 'Jeff Bezos', email: 'jeff@amazon.com' },
  { name: 'Mark Zuckerberg', email: 'zuck@fb.com' },
]
function getInitials({name, email}){
  let final = '';
  final.concat(name.split(' ').forEach(part =>{part.charAt(0)}));
  return final;
}
// Your React elements will go here.
let elements = [
  billionaires.forEach(element => {
    <div className='Contact'>
      <div className='Contact-avatar'>{
        (x = element.name) => {''.concat(x.split(' ').forEach(
          str => {str.charAt(0)}
          ))}
      }</div>
      <span className='Contact-name'>{element.name}</span>
      <a href={element.email}>
        {element.email}
      </a>
    </div>
  })
]

// Use a for loop or array.map to build the elements array

ReactDOM.render(
  <div className='ContactList'>{elements}</div>,
  document.getElementById('root')
)