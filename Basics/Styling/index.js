let createElement = React.createElement

let rootElement =
  createElement('div', {className:'ContactList'}, 
    createElement('h1', {className: 'ContactList-title'}, "Contacts"),
    createElement('div', {},
      createElement(
        'div',
        {className: 'Contact'},
        createElement('div', {className:'Contact-avatar'}, "JN"),
        createElement('span', {className:'Contact-name'}, "James Nelson"),
        createElement(
          'a',
          { href: 'mailto:james@frontarm.com', className: 'Contact-link'},
          "james@frontarm.com",
        ),
        
      ),
      createElement(
        'div',
        {className: 'Contact'},
        createElement('div', {className:'Contact-avatar'}, "M"),
        createElement('span', {className:'Contact-name'}, "Me"),
        createElement(
          'a',
          { href: 'mailto:me@example.com' , className:'Contact-link'},
          "me@example.com"
        )
      )
    )
  )

// The `ReactDOM` variable is set by the second `<script>` tag
// in the above HTML file
let domNode = document.getElementById('root')
ReactDOM.render(rootElement, domNode)