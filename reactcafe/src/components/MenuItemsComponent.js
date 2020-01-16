import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMenu({menu}){
    return(
        <div className="col-md-6 col-lg-10 m-1">
            <Card>
                <CardImg top src={menu.image}></CardImg>
                <CardBody>
                    <CardHeader>
                        <div key={menu.id}>
                            <h2>{menu.name}</h2> <br />
                            <p>{menu.description}</p>
                        </div>
                    </CardHeader>
                    <CardText> 
                        <RenderItems items={menu.items}></RenderItems>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderItems({items}){
    if(items){
        return(
            <div className="col-md-12 m-1">
                {/* <h4> Menu Items </h4> */}
                {items.map(item => {
                    return (<div key={item.id}> 
                        <h4>{item.title} ...........................  
                         {item.price} </h4><br />
                        {item.description}
                        <hr />
                        </div>)}
                    )
                }
            </div>
        );
    };
    
    return(<div/>);
}

function MenuItems(props) {
    if(props.menu){
        return (
           props.menu.map(menu =>{
                    return(
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>{menu.name}</BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <div className="row"> 
                            <RenderMenu menu = {menu}  />
                        </div>
                    </div>
                );
            })
        );
    }

    return (<div/>);

}


export default MenuItems;
