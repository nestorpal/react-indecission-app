// let isVisible = false;

// const onToggle = () => {
//     isVisible = !isVisible;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggle}>{ isVisible ? "Hide" : "Show" } details</button>
//             {
//                 isVisible && (<p>Hey. These are some details you can now see!</p>)
//             }
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// }

// render();

// *********************************************
// COMPONENT VERSION
// *********************************************

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{ this.state.visibility ? "Hide" : "Show" } details</button>
                {
                    this.state.visibility && (<p>Hey. These are some details you can now see!</p>)
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));   