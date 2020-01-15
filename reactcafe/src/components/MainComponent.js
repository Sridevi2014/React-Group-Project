import React, { Component } from 'react';
import Menu from './MenuComponent';
import MenuItems from './MenuItemsComponent';
import { MENU } from '../shared/MenuItems';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            menus: MENU
        };
    }

    render(){

        const MenuItemWithId = ({match}) => {
            return(
                <MenuItems menu={this.state.menus.filter(menu => menu.id === +match.params.menuItemId)}  />
            );
        }

        return(
            <div>
                <Switch>
                    <Route exact path='/menu'></Route>
                    <Route path='menu/:menuItemdId' component={MenuItems}></Route>
                </Switch>
            </div>
        )
    }
}

export default Main;