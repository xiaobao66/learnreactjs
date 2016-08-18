/**
 * Created by xiaobaowei on 2016/8/18.
 */
var UserInfo = React.createClass({
    getInitialState: function () {
        return {
            loading: true,
            error: null,
            data: null
        };
    },
    componentDidMount: function () {
        var that = this;
        this.props.getUserInfo.then(function (value) {
            that.setState({
                loading: false,
                data: value
            });
        }, function (error) {
            that.setState({
                loading: false,
                error: JSON.parse(error.response)
            });
        });
    },
    render: function () {
        if (this.state.loading) {
            return <span>loading...</span>;
        } else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>
        } else {
            return (
                <div>
                    <p>username: {this.state.data.login}</p>
                    <p>userid: {this.state.data.id}</p>
                    <p>email: {this.state.data.email}</p>
                </div>
            );
        }
    }
});

ReactDOM.render(
    <UserInfo getUserInfo={$.getJSON(
        'https://api.github.com/users/xiaobao66',
        {
            access_token: '26f03103c90507e92bb02935249e483872a00850'
        }
    )}></UserInfo>,
    document.getElementById('example')
);