/*import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'*/ //not needed for preview

let billionaires = [
  { name: 'Bill Gates', email: 'billg@microsoft.com' },
  { name: 'Jeff Bezos', email: 'jeff@amazon.com' },
  { name: 'Mark Zuckerberg', email: 'zuck@fb.com' },
  { name: 'Myron Cringenko', email: 'mladyjen@uoguelph.ca'}
]

function ContactList(props){
  return (
    <div className='ContactList'>
      <h1 className='ContactList-title'>Contacts</h1>
      {props.children}
    </div>
  );
}
function Contact(props){
  let names = props.name.split(' ')
  let initials = names.map(name => name[0].toUpperCase()).join('')
  let photo
  if("photoURL" in props){
    photo = <img src={props.photoURL}/>
  }
  return (
    <div className='Contact' key={props.i}>
      <div className='Contact-avatar'>
        {initials}
        {photo}
      </div>
      <span className='Contact-name'>
        {props.name}
      </span>
      <a href={props.email}>
        {props.email}
      </a>
    </div>
  );
}

// Your React elements will go here.
let elements = billionaires.map(billionaire => 
  <Contact {...billionaire} key={billionaire.email}/>)
  
/*billionaires.forEach((element, i) => {
  let contact = <Contact {...billionaires} i/>
  elements.push(contact)
})*/

// Use a for loop or array.map to build the elements array

ReactDOM.render(
  <ContactList>{elements}</ContactList>,
  document.getElementById('root')
)