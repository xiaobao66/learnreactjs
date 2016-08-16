var HelloMessage = React.createClass({
    displayName: "HelloMessage",

    render: function () {
        return React.createElement(
            "h1",
            null,
            "hello ",
            this.props.name
        );
    }
});

ReactDOM.render(React.createElement(HelloMessage, { name: "xiaobao" }), document.getElementById('example'));