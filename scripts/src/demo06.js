/**
 * Created by xiaobaowei on 2016/8/17.
 */
var UserInput = React.createClass({
    handleClick: function () {
        this.refs.userNameInput.focus();
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="userNameInput" placeholder="input username"/>
                <input type="button" value="focus on the input" onClick={this.handleClick}/>
            </div>
        );
    }
});

ReactDOM.render(
    <UserInput></UserInput>,
    document.getElementById('example')
);