import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

//destructuring the props parameter
function RenderMenu({menu}){
    return (
        <Card>
            <Link to={`/menu/${menu.id}`}>
            <CardImg width="100%" src={menu.image} alt={menu.name} />
            <CardBody>
                <CardTitle>
                    <h3>{menu.name}</h3>
                </CardTitle>
            </CardBody>
            </Link>
        </Card>
    );
}

function Menu(props) {

    const menu = props.menu.map(menu => {  
        return (
           <div key={menu.id} className="col-md-5 m-1">
               <RenderMenu menu={menu} />
           </div>
        );
    });
       
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;