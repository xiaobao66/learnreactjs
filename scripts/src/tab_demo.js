var TabSelector = React.createClass({
    getInitialState: function () {
        return {
            selected: this.props.selected
        };
    },

    handleClick: function (e) {
        this.setState({
            selected: e.target.getAttribute('data-value')
        });
    },

    render: function () {
        var tabs = this.props.data.map(function (item) {
            var selected = (item.value === this.state.selected ? 'selected' : '');
            return (
                <li data-value={item.value} className={selected} onClick={this.handleClick}>
                    {item.value}
                </li>
            );
        }, this);

        return (
            <div className='tab-selector'>
                <label>{this.props.label}</label>
                <ul>
                    {tabs}
                </ul>
            </div>
        );
    }
});

var data = [
    {name: 'Red', value: 'red'},
    {name: 'Blue', value: 'blue'},
    {name: 'Yellow', value: 'yellow'},
    {name: 'Green', value: 'green'},
    {name: 'White', value: 'White'}
];

ReactDOM.render(
    <TabSelector label="Color" data={data} selected={null}></TabSelector>,
    document.getElementById('demo')
);