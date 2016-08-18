'use strict';

/**
 * Created by xiaobaowei on 2016/8/17.
 */
var UserGreeting = React.createClass({
    displayName: 'UserGreeting',

    getInitialState: function getInitialState() {
        return {
            name: 'xiaobao'
        };
    },
    changeName: function changeName(e) {
        this.setState({
            name: e.target.value
        });
    },
    render: function render() {
        var name = this.state.name;
        return React.createElement(
            'div',
            null,
            React.createElement('input', { type: 'text', value: name, onChange: this.changeName }),
            React.createElement(
                'p',
                null,
                'hello ',
                name
            )
        );
    }
});

ReactDOM.render(React.createElement(UserGreeting, null), document.getElementById('example'));