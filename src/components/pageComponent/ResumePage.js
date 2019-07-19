import React, {Component} from "react"

class ResumePage extends Component{
    constructor(props) {
        super(props);
        this.props.history.push('/home');
        this.props.history.push(this.props.match.url);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ResumePage;

