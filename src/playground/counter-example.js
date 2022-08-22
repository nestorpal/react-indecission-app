// const user = {
//     name: 'NestorPanu'
//     , age: 28
//     , location: 'My house!'
// }

// function getLocation(location) {
//     return location ? (<p>Location: {location}</p>) : undefined;
// }

// const templatetwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && (<p>Age: {user.age}</p>)}
//         {getLocation(user.location)}
//     </div>
// );

let count = 0;
const plusOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1 id="result">Count: {count}</h1>
            {/*class renames to className*/}
            <button
                className="button"
                onClick={plusOne}>
                +1
            </button>
            <button onClick={minusOne}>
                -1
            </button>
            <button onClick={() => { count = 0; renderCounterApp(); }}>
                Reset
            </button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();