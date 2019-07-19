import React, {Component} from "react";
import {Spring} from "react-spring/renderprops-universal";


class Header extends Component{

	render(){
		return(
			<div className="headerContainer">
				<Spring
					from={{ opacity: 0 }}
					to={{opacity: 1}}
					delay={this.props.delay}
					config={{duration: 800}}>
					{props => (
						<div style={props} className="header">
							<div className="headerName">
								<h1 className="simon" >
									Simon
								</h1>
								<h2 className="edvardsson">
									Edvardsson
								</h2>
								<svg width="60%" viewBox="0 0 100 1">
									<line className="nameLine" x1="0" y1="0" x2="100" y2="00" stroke="#BBBBBB" strokeWidth="2px"/>
								</svg>
							</div>
							<div className="headerInformation">
								<p className="infoText">
									Here i will write some nice intro to what this site offers. Maybe also write some good information about me and my decistions of work.Maybe also write some good information about me and my decistions of workMaybe also write some good information about me and my decistions of work. Here i will write some nice intro to what this site offers. Maybe also write some good information about me and my decistions of work. Maybe also write some good information about me and my decistions of workMaybe also write some good information about me and my decistions of work. heajfmawöfm.awfwaf awf aff afwadad dwadawdef.
								</p>
							</div>
						</div>
					)}
				</Spring>
			</div>
		);
	}
}

export default Header;
