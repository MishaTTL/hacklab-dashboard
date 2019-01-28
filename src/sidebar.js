import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class SidebarHL extends Component {
	constructor(props) {
		super(props);
		this.onChoice = this.onChoice.bind(this);
	}

	onChoice(choice) {
		this.props.onChoice(choice);
	}

	mapDropdownItems(hsubkey, sidx) {
		const subkey = hsubkey.toLowerCase().split(' ').join('_');
		return <MenuItem key={sidx} eventKey={`super.${subkey}`} href={`#/${subkey}`} >{hsubkey}</MenuItem>;
	}

	//Took out onSelect={this.onChoice} and replaced with 'hash-router' package
	render() {
		const sidebarKeys = Object.keys(this.props.sidebarContent);

		const sidebarItemsArray = sidebarKeys.map( (hkey, idx) => {
			const item = this.props.sidebarContent[hkey];
			const key = hkey.toLowerCase().split(' ').join('_');

			return (
				<NavItem id={`nav_${key}`} key={idx} eventKey={key} title={key} href={`#/${key}`}>
					{(!item || (typeof item == "function")) ? hkey :
						<NavDropdown id={`drop_${key}`} eventKey={key} title={hkey}>
							{Object.keys(item).map(this.mapDropdownItems) }
						</NavDropdown>
					}
				</NavItem>
			);
		});

		return (
			<Nav bsStyle="pills" className="hacklab-sidebar" stacked activeKey={1} onSelect={null}>
				{sidebarItemsArray}
			</Nav>
		);
	}
}

export default SidebarHL;
