/**
 * Created by xiaobaowei on 2016/8/17.
 */
var UserGreeting = React.createClass({
    displayName: 'UserGreeting',

    getInitialState: function () {
        return {
            name: 'xiaobao'
        };
    },
    changeName: function (e) {
        this.setState({
            name: e.target.value
        });
    },
    render: function () {
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