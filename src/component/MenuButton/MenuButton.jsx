import React, {Component} from 'react';
import './MenuButton.scss';

class MenuButton extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.handleMouseUp === this.props.handleMouseUp) {
			return false;
		} else {
			return true;
		}
	}

	render() {
		console.log("Rendering: MenuButton");
		return (
			<button id="roundButton" className="roundButton"
				onMouseUp={this.props.handleMouseUp}></button>
		);
	}
}

export default MenuButton;