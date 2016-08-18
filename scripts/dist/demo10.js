'use strict';

/**
 * Created by xiaobaowei on 2016/8/18.
 */
var UserInfo = React.createClass({
    displayName: 'UserInfo',

    getInitialState: function getInitialState() {
        return {
            loading: true,
            error: null,
            data: null
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        var that = this;
        // this.props.getUserInfo.then(function (value) {
        //     that.setState({
        //         loading: false,
        //         data: value
        //     });
        // }, function (error) {
        //     that.setState({
        //         loading: false,
        //         error: JSON.parse(error.response)
        //     });
        // });
        //改用es2015箭头函数
        this.props.getUserInfo.then(function (result) {
            return _this.setState({
                loading: false,
                data: result
            });
        }, function (error) {
            return _this.setState({
                loading: false,
                error: error
            });
        });
    },
    render: function render() {
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
        access_token: 'd489881c2b775224bf5091f55b20185a9edd4040'
    }) }), document.getElementById('example'));