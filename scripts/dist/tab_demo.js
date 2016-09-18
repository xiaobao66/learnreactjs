'use strict';

var TabSelector = React.createClass({
    displayName: 'TabSelector',

    getInitialState: function getInitialState() {
        return {
            selected: this.props.selected
        };
    },

    handleClick: function handleClick(e) {
        this.setState({
            selected: e.target.getAttribute('data-value')
        });
    },

    render: function render() {
        var tabs = this.props.data.map(function (item, index) {
            var selected = item.value === this.state.selected ? 'selected' : '';
            return React.createElement(
                'li',
                { 'data-value': item.value, className: selected, onClick: this.handleClick,
                    key: Math.random() },
                item.value
            );
        }, this);

        return React.createElement(
            'div',
            { className: 'tab-selector' },
            React.createElement(
                'label',
                null,
                this.props.label
            ),
            React.createElement(
                'ul',
                null,
                tabs
            )
        );
    }
});

var data = [{ name: 'Red', value: 'red' }, { name: 'Blue', value: 'blue' }, { name: 'Yellow', value: 'yellow' }, { name: 'Green', value: 'green' }, { name: 'White', value: 'White' }];

ReactDOM.render(React.createElement(TabSelector, { label: 'Color', data: data, selected: null }), document.getElementById('demo'));