/*import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'*/ //not needed for preview
var billionaires = require('./billionares.js')
billionaires.forEach(element => {
  console.log(element)
});
// Your React elements will go here.
let elements = []
billionaires.forEach((element, i) => {
  let photo
  if("photoURL" in element){
    photo = <img src={element.photoURL}/>
  }
  let contact = <div className='Contact' key={i}>
      <div className='Contact-avatar'>
        {element.name.split(' ').map(s => s[0]).join('')}
        {photo}
      </div>
      <span className='Contact-name'>{element.name}</span>
      <a href={element.email}>
        {element.email}
      </a>
    </div>
  elements.push(contact)
})

// Use a for loop or array.map to build the elements array

ReactDOM.render(
  <div className='ContactList'>{elements}</div>,
  document.getElementById('root')
)