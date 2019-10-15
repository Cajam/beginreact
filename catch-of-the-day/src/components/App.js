import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    // set initial state as empty on load
    state = {
        fishes: {},
        order: {}
    };

    loadSampleFishes = () => {
        // load sample fishes on click
        this.setState({ fishes: sampleFishes });
    };

    addFish = (fish) => {
        // take a copy of current state, use a spread operator to copy the object
        const fishes = {...this.state.fishes};
        // add our new fish with date.now as the unique id
        fishes[`fish${Date.now()}`] = fish;
        // set the new fishes object to state
        this.setState({
            fishes: fishes
        });
    };

    addToOrder = (key) => {
        // get the current state copy
        const order = {...this.state.order};
        // add to the order or update the number in the cart
        order[key] = order[key] + 1 || 1;
        // call setState to update the state in this file
        this.setState({ order: order });
    };

    render() {
        return(
        <React.Fragment>
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Fish"/>
                    <ul className="fishes">
                        {/* use object.keys to create a repeat in JSX, pass in details using this.state.fishes[key] */}
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
                    </ul>
                </div>
                <Order />
                {/* use props to pass the addFish function down */}
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        </React.Fragment>
        )
    }
}

export default App;