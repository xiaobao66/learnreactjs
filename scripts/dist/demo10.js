/**
 * Created by xiaobaowei on 2016/8/18.
 */
var UserInfo = React.createClass({
    displayName: 'UserInfo',

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
            return React.createElement(
                'span',
                null,
                'loading...'
            );
        } else if (this.state.error !== null) {
            return React.createElement(
                'span',
                null,
                'Error: ',
                this.state.error.message
            );
        } else {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'username: ',
                    this.state.data.login
                ),
                React.createElement(
                    'p',
                    null,
                    'userid: ',
                    this.state.data.id
                ),
                React.createElement(
                    'p',
                    null,
                    'email: ',
                    this.state.data.email
                )
            );
        }
    }
});

ReactDOM.render(React.createElement(UserInfo, { getUserInfo: $.getJSON('https://api.github.com/users/xiaobao66', {
        access_token: '26f03103c90507e92bb02935249e483872a00850'
    }) }), document.getElementById('example'));