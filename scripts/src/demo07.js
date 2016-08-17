/**
 * Created by xiaobaowei on 2016/8/17.
 */
var HobbyButton = React.createClass({
    getInitialState: function () {
        return {like: true};
    },
    handleClick: function () {
        this.setState({
            like: !this.state.like
        });
    },
    render: function () {
        var text = this.state.like ? 'football':'basketball';
        return (
            <p onClick={this.handleClick}>
                You like {text}.Click to change
            </p>
        );
    }
});

ReactDOM.render(
    <HobbyButton></HobbyButton>,
    document.getElementById('example')
);
