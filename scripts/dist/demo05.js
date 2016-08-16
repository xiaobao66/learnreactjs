/**
 * Created by xiaobaowei on 2016/8/16.
 */
var MyName = React.createClass({
    displayName: 'MyName',

    propTypes: {
        name: React.PropTypes.string.isRequired
    },
    getDefaultProps: function () {
        return {
            name: 'xiaobao'
        };
    },
    render: function () {
        return React.createElement(
            'h1',
            null,
            'hello ',
            this.props.name
        );
    }
});

ReactDOM.render(React.createElement(MyName, null), document.getElementById('example'));