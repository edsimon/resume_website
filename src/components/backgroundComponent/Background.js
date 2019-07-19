import React, {Component} from "react";
import {Spring} from "react-spring/renderprops-universal";
import * as easings from 'd3-ease'

var start = "0,0 100,0 100,30 100,70 100,100, 0,100",
	end   = "0,0 70,0 60,40 50,60 40,100 0,100";

class Background extends Component{
	constructor(props){
		super(props);
		console.log(start)
		this.state = {
			clicked: false,
			first: props.start,
			second: props.end
		};
		this.update = this.update.bind(this)
	}

	update(){
		console.log("Updated");
		if (!this.state.clicked){
			this.setState({
				clicked: true,
				first: end,
				second: start
			})
		}
		else{
			this.setState({
				clicked: false,
				first: start,
				second: end
			})
		}
	}

	ani() {
		return(
			<Spring
				from={{radius: this.state.first}}
				to={{ radius: this.state.second}}
				delay={this.props.delay}
				config={{duration: 1500, easing: easings.easeBackOut}}>
				{props => (
					<div className="background" style={props}>
						<svg style={{fill:"#222"}} preserveAspectRatio={"none"} width={"100vw"} height={"100vh"} viewBox={"0 0 100 100"}>
							<polygon points={props.radius}/>
						</svg>
					</div>
				)}
			</Spring>
		)
	}

	render() {
		console.log(this.state);
		return(
			<div className={"background"}>
				{this.ani()}
			</div>
		);
	}
}

const backgroundSVG = {
	fill: "#222"
}

export default Background;