import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { billionaires } from './billionares';

export function ContactList(props){
  return (
    <div className='ContactList'>
      <h1 className='ContactList-title'>Contacts</h1>
      {props.children}
    </div>
  );
}

export function Contact(props){
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
