import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class SidebarHL extends Component {
	render() {
		const sidebarItemsArray = [
			{title:"Member List"},
			{title:"Transport", content:["Parking Spot", "Transit Info"]},
			{title:"Occupancy", content:["Interior Sensors", "Door Bot"]},
			{title:"Equipment", content:["Laser Cutter", "3D Printers", "2D print or scan"]},
			{title:"Events", content:["Calendar", "Door Mode", "DJ Console"]},
			{title:"Sound System"},
			{title:"Sign and Display"},
			{title:"Communications"},
			{title:"Statistics"},
			{title:"Utilities"},
			{title:"Sysadmin"}
		];

		const sidebarItems = sidebarItemsArray.map( (item, idx) => {
			return (
				<NavItem id={`nav${idx+1}`} key={idx+1} eventKey={idx+1} title={item.title} onSelect={this.props.onChoice}>
					{!item.content ? item.title :
						<NavDropdown id={`drop${idx+1}`} eventKey={idx+1} title={item.title}>
							{item.content.map( (innerItem, sidx) => <MenuItem key={sidx+1} eventKey={`${idx+1}.${sidx+1}`} onSelect={this.props.onChoice}>{innerItem}</MenuItem>)}
						</NavDropdown>
					}
				</NavItem>
			);
		});

		return (
			<Nav bsStyle="pills" className="hacklab-sidebar" stacked activeKey={1} onSelect={null}>
				{sidebarItems}
			</Nav>
		);
	}
}

export default SidebarHL;
