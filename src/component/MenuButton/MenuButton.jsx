import React, {PureComponent} from 'react';
import './MenuButton.scss';

class MenuButton extends PureComponent {

	/* shouldComponentUpdate(nextProps, nextState) {
		return (nextProps.handleMouseUp === this.props.handleMouseUp) ? false : true;
	} */

	render() {
		console.log("Rendering: MenuButton");
		return (
			<button id="roundButton" className="roundButton"
				onMouseUp={this.props.handleMouseUp}></button>
		);
	}
}

export default MenuButton;