import logo from './logo.svg';
import './App.css';
import { billionaires } from './billionares';
import {update} from './index.js';
import {Contact, ContactList} from './Contacts'

function App(props) {
  return (
    <ContactList>
      {props.contacts.map((contact, i) => 
        <Contact {...contact} key={i}/>
      )}
      <button onClick={update}>
        Add
      </button>
    </ContactList>
  );
}

export default App;
