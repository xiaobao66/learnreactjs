"use strict";

/**
 * Created by xiaobaowei on 2016/8/18.
 */
var Hello = React.createClass({
    displayName: "Hello",

    getInitialState: function getInitialState() {
        return {
            opacity: 1
        };
    },
    componentDidMount: function componentDidMount() {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= 0.05;
            if (opacity < 0.1) {
                opacity = 1;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    },
    render: function render() {
        return React.createElement(
            "div",
            { style: { opacity: this.state.opacity } },
            "Hello ",
            this.props.name
        );
    }
});

ReactDOM.render(React.createElement(Hello, { name: "xiaobao" }), document.getElementById('example'));