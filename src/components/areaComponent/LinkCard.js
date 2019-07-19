import React, {Component} from "react"
import {Spring} from "react-spring/renderprops-universal";
import {Redirect} from "react-router-dom";
import * as easings from 'd3-ease'

class LinkCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            redirect: false
        };
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={this.props.to} />
        }
    };
    render() {
        return(
            <Spring
                from = {{opacity: 0,
                    marginRight: "-15vw"}}
                to =   {{opacity: 1,
                    marginRight: "5vw"}}
                delay={this.props.delay}
                config={{duration: 1500, easing: easings.easeExp}}>
                {props => (
                    <div onClick={this.setRedirect} style={props} className="cardContainer">
                        {this.renderRedirect()}
                        <div className="cardImageContainer">
                            <img className={"cardMedia"}
                                 alt={"random"}
                                 src={this.props.image}/>
                        </div>
                        <div className="bottomColor">
                             <h3 className={"linkHeader"}>
                                {this.props.title}
                             </h3>
                        </div>
                    </div>
                    )}
            </Spring>
        );
    }
}

export default LinkCard;