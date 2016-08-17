/**
 * Created by xiaobaowei on 2016/8/17.
 */
var UserGreeting = React.createClass({
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
        return (
            <div>
                <input type="text" value={name} onChange={this.changeName}/>
                <p>hello {name}</p>
            </div>
        );
    }
});

ReactDOM.render(
    <UserGreeting></UserGreeting>,
    document.getElementById('example')
);