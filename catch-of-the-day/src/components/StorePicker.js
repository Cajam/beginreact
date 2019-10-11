import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* use React.Fragment instead of div containers to keep the DOM clean, otherwise you can only return one top level HTML element */}
                <h1>Fish!</h1>
                <form className="store-selector">
                    <h2>Please Enter A Store</h2>
                    <input type="text" placeholder="Store Name" />
                    <button type="submit">Visit Store -></button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;