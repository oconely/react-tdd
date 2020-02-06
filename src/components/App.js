import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            gifts: []
        }
    }

    addGift = () => {
        const { gifts } = this.state;

        const ids = gifts.map(gift => gift.id);

        const max_id = ids.length > 0 ? Math.max(...ids) : 0;
        gifts.push({id: max_id + 1});

        this.setState({ gifts });
    }

    render() {
        return (
            <div> 
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    {
                        this.state.gifts.map(gift => <div key={gift.id}></div>)
                    }
                </div>
                <Button onClick={this.addGift} className="btn-add">Add Gift</Button>
            </div>
        );  
    }
}

export default App;