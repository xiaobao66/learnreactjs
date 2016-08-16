/**
 * Created by xiaobaowei on 2016/8/16.
 */
var MyName = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired
    },
    getDefaultProps: function () {
        return {
            name: 'xiaobao'
        }
    },
    render: function () {
        return <h1>hello {this.props.name}</h1>
    }
});

ReactDOM.render(
    <MyName></MyName>,
    document.getElementById('example')
);