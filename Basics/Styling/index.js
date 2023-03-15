
let createElement =  React.createElement

let rootElement =
    createElement('div', {},
        createElement('h1',{}, "Contracts"),
        createElement('ul', {},
            createElement('li', {},
                createElement(
                    'a',
                    {href: 'mailto:lol@cringe.com'},
                    "Myron"
                ),
            ),
            createElement('li', {},
                createElement(
                    'a',
                    {href: 'mailto:me@cringe.com'},
                    "Me"
                ),
            )
        )
    )
let domNode = document.getElementById('root')
ReactDOM.render(rootElement, domNode)
