'use strict';

var NodeList = React.createClass({
    displayName: 'NodeList',

    render: function render() {
        return React.createElement(
            'ol',
            null,
            React.Children.map(this.props.children, function (child) {
                return React.createElement(
                    'li',
                    null,
                    'hello ',
                    child
                );
            })
        );
    }
});

ReactDOM.render(React.createElement(
    NodeList,
    null,
    React.createElement(
        'span',
        null,
        'xiaobao'
    ),
    React.createElement(
        'span',
        null,
        'amy'
    )
), document.getElementById('example'));