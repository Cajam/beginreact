import React from 'react';
// this is getting an explicit function from an export as a 'named export', 
//      vs getting 'default export' as above in import React
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    // functions are written as properties of this React.Component, so 'this' references the parent component instead of original this, which is undefined
    goToStore = event => {
        // keep page from refreshing
        event.preventDefault();
        // get input text (using React refs or sinking data with state, try not to touch the DOM with querySelectors)
        const storeName = this.myInput.current.value;
        // and change the page to the store URL from myInput
        // as a child of the react Router, we have access to push from the router
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <React.Fragment>
                {/* use React.Fragment instead of div containers to keep the DOM clean, otherwise you can only return one top level HTML element */}
                <h1>Fish!</h1>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter A Store</h2>
                    {/* use defaultValue, value= won't work because it must be attached to state */}
                    <input type="text" ref={this.myInput} placeholder="Store Name" defaultValue={getFunName()} />
                    <button type="submit">Visit Store -></button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;