import React, {Component} from "react"

class FilterButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            show : false,
            backgroundColor : "#e7e7e7"
        }
    }

    onClick = () => {
        this.props.filter(this.props.text)
        if ( !this.state.show ){
            this.setState({
                show: true,
                backgroundColor: "#de7f09"
            })
        } else {
            this.setState({
                show: false,
                backgroundColor: "#e7e7e7"
            })
        }
        console.log("Hello")
    }

    render() {
        return(
            <button className="filterButton" style={this.state} onClick={ this.onClick }>{this.props.text}</button>
        );
    }
}

export default FilterButton;