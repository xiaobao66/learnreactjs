var NodeList = React.createClass({
    render: function () {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>hello {child}</li>
                    })
                }
            </ol>
        );
    }
});

ReactDOM.render(
    <NodeList>
        <span>xiaobao</span>
        <span>amy</span>
    </NodeList>,
    document.getElementById('example')
);