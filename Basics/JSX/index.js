var React = require('react');
var ReactDOM = require('react-dom');
let createElement = React.createElement

let rootElement = (
  <div className='ContactList'>
    <h1 className='ContactList-title'>Contacts</h1>
    <div>
      <div className='Contact'>
        <div className='Contact-avatar'>JN</div>
        <span className='Contact-name'>Myron Myron</span>
        <a href='mailto:mladyjen@uoguleph.ca' className='Contact-link'>mladyjen@uoguelph.ca</a>
      </div>
      <div className='Contact'>
        <div className='Contact-avatar'>DW</div>
        <span className='Contact-name'>Myron Myron</span>
        <a href='mailto:dwang11@uoguleph.ca' className='Contact-link'>dwang11@uoguelph.ca</a>
      </div>
    </div>
  </div>
)

// The `ReactDOM` variable is set by the second `<script>` tag
// in the above HTML file
ReactDOM.render(rootElement, document.getElementById('root'))