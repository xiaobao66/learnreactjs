var HelloMessage = React.createClass({
    render: function () {
        return <h1>hello {this.props.name}</h1>
    }
});

ReactDOM.render(
    <HelloMessage name="xiaobao"></HelloMessage>,
    document.getElementById('example')
);