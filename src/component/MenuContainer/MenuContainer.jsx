import React, {Component} from 'react';
import MenuButton from '../MenuButton/MenuButton';
import Menu from '../Menu/Menu';

class MenuContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
		};

		this.handleMouseUp = this.handleMouseUp.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	handleMouseUp(e) {
		this.toggleMenu();

		console.log('clicked');
		e.stopPropagation();
	}

	toggleMenu() {
		this.setState({
			visible: !this.state.visible
		});
	}

	render() {
		console.log("Rendering: MenuContainer");
		return (
			<div>
				<MenuButton handleMouseUp={this.handleMouseUp} />
				<Menu handleMouseUp={this.handleMouseUp}
					menuVisibility={this.state.visible} />
				<div>
					<p>Can you spot the item that doesn&apos;t belong?</p>
					<ul>
						<li>Lorem</li>
						<li>Ipsum</li>
						<li>Dolor</li>
						<li>Sit</li>
						<li>Bumblebees</li>
						<li>Aenean</li>
						<li>Consectetur</li>
					</ul>
				</div>
			</div >
		);
	}
}

export default MenuContainer;