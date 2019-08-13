import React, {Component} from "react"

class GoodBye extends Component{
    render() {
        return(
           <div className="bye">
               <ul className="infoList byeInfo">
                   <li className="infoListItems"><b>Design:</b> Simon Edvardsson</li>
                   <li className="infoListItems"><b>Development:</b> Simon Edvardsson</li>
                   <li className="infoListItems"><b>Publishing:</b> GitHub</li>
               </ul>
           </div>
        );
    }
}
export default GoodBye;