import React, {Component} from "react";
import twitter from "../../assets/img/twitter.png"

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            scrollPosition: 0
        }
    }

    scroll = () => {
        this.setState({
            scrollPosition: 100
        });
        console.log("hello")
    };

    render() {
        return(
            <div className={"project"}
                 onScroll={this.scroll}>
                <div className="modalInfo">
                    <h1 className={"modalHeader"}>{this.props.header}</h1>
                    <a className={"modalLink"}
                       href={this.props.link}>
                        Link to Github
                    </a>
                    <svg className="modalLine" viewBox="0 0 100 1">
                        <line x1="0" y1="0" x2="100" y2="00" stroke="#777" strokeWidth="2px"/>
                    </svg>
                    <p className={"modalInformation"}>{this.props.modalInfo}</p>
                </div>
                <div className="modalImageContainer">
                    <img className={"modalImage"}
                         alt={"random"}
                         src={this.props.image}/>
                </div>
            </div>
        );
    }
}

export default Project;