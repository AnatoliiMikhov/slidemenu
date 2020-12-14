/*eslint no-useless-concat: 0*/
import React, {Component} from 'react';
import './Menu.scss';

class Menu extends Component {
	render() {
		let visibility = "hide";

		if (this.props.menuVisibility) {
			visibility = "show";
		}

		return (
			<div id="flyoutMenu"
				className={"flyoutMenu" + " " + visibility}
				onMouseUp={this.props.handleMouseUp}>

				<h2><a href="#L">Home</a></h2>
				<h2><a href="#L">About</a></h2>
				<h2><a href="#L">Contact</a></h2>
				<h2><a href="#L">Search</a></h2>
			</div>
		);
	}
}

export default Menu;