'use strict';

var names = ['Tom', 'Jack', 'Amy'];

ReactDOM.render(React.createElement(
    'ul',
    null,
    names.map(function (name, index) {
        return React.createElement(
            'li',
            { key: index },
            'hello ',
            name,
            '!'
        );
    })
), document.getElementById('example'));