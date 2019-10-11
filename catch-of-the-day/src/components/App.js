import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
    render() {
        return(
        <React.Fragment>
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Fish"/>
                </div>
                <Inventory />
                <Order />
            </div>
        </React.Fragment>
        )
    }
}

export default App;