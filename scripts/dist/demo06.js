/**
 * Created by xiaobaowei on 2016/8/17.
 */
var UserInput = React.createClass({
    displayName: "UserInput",

    handleClick: function () {
        this.refs.userNameInput.focus();
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement("input", { type: "text", ref: "userNameInput", placeholder: "input username" }),
            React.createElement("input", { type: "button", value: "focus on the input", onClick: this.handleClick })
        );
    }
});

ReactDOM.render(React.createElement(UserInput, null), document.getElementById('example'));