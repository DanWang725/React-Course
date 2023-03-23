import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { billionaires } from './billionares';
import { Contact, ContactList} from './Contacts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App contacts={billionaires}/>
  </React.StrictMode>
);

export function update(){
  let updatedContacts = billionaires.concat({
    name: 'Myron',
    email: 'mladyjen@uoguelph.ca',
  });
  root.render(<App contacts={updatedContacts}/>)
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
