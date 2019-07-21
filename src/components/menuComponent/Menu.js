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
                    <MenuRow delay={2000}/>
                    <MenuRow delay={2100}/>
                    <MenuRow delay={2200}/>
                    <MenuRow delay={2300}/>
                    <MenuRow delay={2400}/>
                    <MenuRow delay={2500}/>
                    <MenuRow delay={2600}/>
                </div>

            </div>
        )
    }
}
export default Menu;


/*

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={'/'} />
        }
    };


                <svg onClick={ this.setRedirect }
                     className={"backArrow"}
                     width="8vw" height="8vh"
                     viewBox="0 0 128 128">
                    <path fill="#222" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"></path>
                    <path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53c29.2,0,53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"></path>
                    <path fill="#444b54" d="M51.5,67c-0.9,0-1.8-0.4-2.4-1.2c-1-1.3-0.7-3.2,0.6-4.2l20-15c1.3-1,3.2-0.7,4.2,0.6c1,1.3,0.7,3.2-0.6,4.2l-20,15C52.8,66.8,52.1,67,51.5,67z"></path>
                    <path fill="#444b54" d="M71.5,82c-0.6,0-1.3-0.2-1.8-0.6l-20-15c-1.3-1-1.6-2.9-0.6-4.2s2.9-1.6,4.2-0.6l20,15c1.3,1,1.6,2.9,0.6,4.2C73.3,81.6,72.4,82,71.5,82z"></path>
                </svg>
                {this.renderRedirect()}

 */