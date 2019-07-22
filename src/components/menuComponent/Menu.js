import React, {Component} from "react"
import MenuRow from "./MenuRow";
import {Spring} from "react-spring/renderprops-universal";


class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            redirect: false
        };
    }


    render() {
        return(
            <div className={"menuContainer"}>
                <Spring
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                    delay={1500}>
                    {props => (
                        <h1 style={props} className="menuHeader">
                            {this.props.header}
                        </h1>
                    )}
                </Spring>
                <Spring
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                    delay={1800}>
                    {props => (
                        <h2 style={props} className="menuFilter">
                            Filter
                        </h2>
                    )}
                </Spring>
                <div className="menuOptions">
                    <MenuRow manageFilter={this.props.manageFilter} name={"Java"} delay={2000}/>
                    <MenuRow manageFilter={this.props.manageFilter} name={"Python"} delay={2100}/>
                    <MenuRow manageFilter={this.props.manageFilter} name={"Machine learning"} delay={2200}/>
                    <MenuRow manageFilter={this.props.manageFilter} name={"Application"} delay={2300}/>
                </div>

            </div>
        )
    }
}
export default Menu;