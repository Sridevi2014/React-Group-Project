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
                <MenuItems menu={this.state.menus.filter(menu => menu.id === +match.params.menuItemId)} />
            );
        }

        return(
            <div>
                <Switch>
                    <Route exact path='/menu'  render={() => <Menu menu={this.state.menus} />}></Route>
                    <Route path='/menu/:menuItemId' component={MenuItemWithId} />
                </Switch>
            </div>
        );
    };
}

export default Main;