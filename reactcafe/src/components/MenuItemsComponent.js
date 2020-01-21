import React from 'react';
import { Card, CardImg, CardBody, Breadcrumb, BreadcrumbItem, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMenu({menu}){
    return(
        <React.Fragment>
           <div className="col-md-2"></div>
            <div className="col-md-8">
                <Card>
                    <CardImg top src={menu.image} alt={menu.altimage} width="100%"></CardImg>
                    <CardBody>
                        <CardHeader>
                            <div key={menu.id}>
                                <h1>{menu.name}</h1>
                                <p>{menu.description}</p>
                            </div>
                        </CardHeader>
                            <RenderItems items={menu.items}></RenderItems>
                    </CardBody>
                </Card>
            </div>
            <div className="col-md-2"></div>
        </React.Fragment>
    );
}

function RenderItems({items}){
    if(items){
        return(
            <div className="col-md-12 m-1">
                {/* <h4> Menu Items </h4> */}
                {items.map(item => {
                    return (<div key={item.menuid}> 
                        <h4>{item.title} </h4>
                        <h5> {item.price}</h5>
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
                        <div className="container" key={menu.id}>
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
