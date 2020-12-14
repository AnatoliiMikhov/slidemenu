import React, {Component} from 'react';
import './MenuButton.scss';

class MenuButton extends Component {
	render() {
		return (
			<button id="roundButton" className="roundButton"
				onMouseUp={this.props.handleMouseUp}></button>
		);
	}
}

export default MenuButton;