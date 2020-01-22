import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { CAFEITEMS } from '../shared/cafeitems';
import Products from './ProductsComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {       
            cafeitems: CAFEITEMS        
        };
    }
    
    render() {
        return (
            <div>
                <Switch>
                     <Route exact path='/products' render={() => <Products cafeitems={this.state.cafeitems}  />} />              
                </Switch>
            </div>
        )
    }
}
export default Main;
