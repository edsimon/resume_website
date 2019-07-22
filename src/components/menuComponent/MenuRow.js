import React, {Component} from "react"
import {Spring} from "react-spring/renderprops-universal";


class MenuRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            hover: true,
            backgroundColor: "#222",
            color: "#BBB",
            border: "0px solid",
            borderRadius: "5px",
            transition: "background-color 0.5s ease"
        };

    }

    hover = () => {
        this.setState({
            hover: true,
            backgroundColor: "#444",
            color: "white",
        });
    };
    notHover = () => {
        this.setState({
            hover: true,
            backgroundColor: "#222",
            color: "#BBB",
        });
    };



    render() {
        return(
            <Spring
                from={{ opacity: 0}}
                to  ={{ opacity: 1}}
                delay={this.props.delay}
                >
                {props => (
                    <div className="rowContainer" style={props}>
                        <div className="row"
                             onMouseOver ={this.hover}
                             onMouseLeave={this.notHover}
                             style={this.state}>
                            <p className="rowName">
                                {this.props.name}
                            </p>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}
export default MenuRow;