/**
 * Created by xiaobaowei on 2016/8/17.
 */
var HobbyButton = React.createClass({
    displayName: 'HobbyButton',

    getInitialState: function () {
        return { like: true };
    },
    handleClick: function () {
        this.setState({
            like: !this.state.like
        });
    },
    render: function () {
        var text = this.state.like ? 'football' : 'basketball';
        return React.createElement(
            'p',
            { onClick: this.handleClick },
            'You like ',
            text,
            '.Click to change'
        );
    }
});

ReactDOM.render(React.createElement(HobbyButton, null), document.getElementById('example'));