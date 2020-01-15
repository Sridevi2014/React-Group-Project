import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItems({menus}){
    return(
        <div className="col-md-6 m-1">
            <Card>
                <CardImg top src={menus.image}></CardImg>
                <CardBody>
                    <CardTitle>
                        <div key={menu.id}>
                            <h2>{menus.name}</h2> <br />
                            <h3>{menus.description}</h3>
                        </div>
                    </CardTitle>
                    <CardText> 
                        {menus.map(menu => {
                            return (<div key={menu.items.id}>
                                <h3>{menu.items.text}.......................{menu.items.price} </h3> <br />
                                <h4>{menu.items.description}</h4>
                            </div>  )}
                        )}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function MenuItems(props) {
    if(props.menus){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.menus.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.menus.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderMenuItems menus = {props.menus} />
                </div>  
            </div>
        ); 
    }
    return (<div/>);
}


export default MenuItems;