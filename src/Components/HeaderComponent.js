import React, { Component } from 'react';
import { Navbar, Jumbotron} from 'reactstrap';

class Header extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
            <Navbar dark expand="md">
                <div className="container">
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className = "col-12 col-sm-6">
                            <h1>StopWatch</h1>
                            <p>Web Development Assignment by Tvishtryon Solutions Pvt. Ltd.</p>
                        </div>
                    </div>
                </div> 
            </Jumbotron>
     
            </> //React.Fragment
        )
    }
}
export default Header;
