var names = ['Tom', 'Jack', 'Amy'];

ReactDOM.render(
    <ul>
        {
            names.map(function (name, index) {
                return <li key={index}>hello {name}!</li>
            })
        }
    </ul>,
    document.getElementById('example')
);