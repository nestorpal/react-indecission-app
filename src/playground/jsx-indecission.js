console.log('App.js is up and running ;)');

const app = {
    title: "Nextor's Indecission App ;)"
    , subtitle: "This is some info"
    , options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    //console.log('form submitted!');
    const option = e.target.elements.option.value; // access objects inside form with their names

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecissionApp();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderIndecissionApp();
};

const onMakeDecission = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderIndecissionApp = () => {
    // JSX => Javascript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && (<p>{app.subtitle}</p>) }
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            
            <button onClick={onMakeDecission} disabled={app.options.length === 0}>What should I do?</button>

            <button onClick={onRemoveAll}>Remove all</button>
            {
                // EXAMPLE
                //[99, 98, 97, 'Miles', 'Morales', null, undefined, true] // all render except for null, undef and booleans
                //[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>] // key is necessary for React Virtual DOM
                
                // [55, 101, 1000].map((number) => {
                //     return (<p key={number}>Number: {number}</p>);
                // })
            }
            {(app.options && app.options.length > 0) &&
                (
                    <ol>
                        {
                            app.options.map((option) => <li key={option}>{option}</li>)
                        }
                    </ol>
                )
            }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button >Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderIndecissionApp();