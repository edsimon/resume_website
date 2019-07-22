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
                <div className="menuOptions">
                    <MenuRow name={"Java"} delay={2000}/>
                    <MenuRow name={"Python"} delay={2100}/>
                    <MenuRow name={"Machine learning"} delay={2200}/>
                    <MenuRow name={"Application"} delay={2300}/>
                    <MenuRow name={""} delay={2400}/>
                    <MenuRow name={""} delay={2500}/>
                    <MenuRow name={""} delay={2600}/>
                </div>

            </div>
        )
    }
}
export default Menu;