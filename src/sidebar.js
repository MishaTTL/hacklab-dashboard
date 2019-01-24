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

	render() {
		const sidebarKeys = Object.keys(this.props.sidebarContent);

		const sidebarItemsArray = sidebarKeys.map( (key, idx) => {
			const item = this.props.sidebarContent[key];

			return (
				<NavItem id={`nav_${key}`} key={key} eventKey={key} title={key} onSelect={this.onChoice}>
					{(!item || item.type) ? key :
						<NavDropdown id={`drop_${key}`} eventKey={key} title={key}>
							{Object.keys(item).map( (subkey, sidx) => <MenuItem key={subkey} eventKey={`${key}.${subkey}`} onSelect={this.props.onChoice}>{subkey}</MenuItem>)}
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
