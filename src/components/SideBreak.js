import React, {Component} from "react";
import Fade from 'react-reveal/Fade';

class SideBreak extends Component{

    render(){
        return(
          <div className="infoHeader">
              <Fade>
                  <div className="intro">
                      <h1 className="introduction introHeader">
                          {this.props.header}
                      </h1>
                      <p className={"introduction introInfo"}>
                          {this.props.paragraph}
                      </p>
                  </div>
              </Fade>
          </div>
        );
    }
}

export default SideBreak;