/*import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'*/ //not needed for preview

let billionaires = [
  { name: 'Bill Gates', email: 'billg@microsoft.com' },
  { name: 'Jeff Bezos', email: 'jeff@amazon.com' },
  { name: 'Mark Zuckerberg', email: 'zuck@fb.com' },
  { name: 'Myron Cringenko', email: 'mladyjen@uoguelph.ca'}
]
function getInitials({name, email}){
  let final = '';
  final.concat(name.split(' ').forEach(part =>{part.charAt(0)}));
  return final;
}
// Your React elements will go here.
let elements = []
billionaires.forEach((element, i) => {
  let contact = <div className='Contact' key={i}>
      <div className='Contact-avatar'>
        {element.name.split(' ').map(s => s[0]).join('')}
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