import React, { Component } from 'react';
import SidebarHL from './sidebar';
import Utilities from './pages/utilities';
import Print2dHL from './pages/2dPrint';
import NotFoundHL from './pages/notFound';
import Signs from './pages/signs';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {page:1};
		this.onChoice = this.onChoice.bind(this);

		this.sidebarItemsJson = {
			"Member List": null,
			"Transport": {
				"Parking Spot": null,
				"Transit Info": null
			},
			"Occupancy": {
				"Interior Sensors": null,
				"Door Bot": null
			},
			"Equipment": {
				"Laser Cutter": null,
				"3D Printers": null,
				"2D print or scan": <Print2dHL />
			},
			"Events": {
				"Calendar": null,
				"Door Mode": null,
				"DJ Console": null
			},
			"Sound System": null,
			"Sign and Display": <Signs />,
			"Communications": null,
			"Statistics": null,
			"Utilities": <Utilities />,
			"Sysadmin": null
		};
	}

	getPage() {
		const allItems = this.sidebarItemsJson;
		const page = this.state.page.toString().split(".");

		if(allItems.hasOwnProperty(page[0])) {
			const picked = allItems[page];
			if(picked && picked.hasOwnProperty("type"))
				return picked;
			else
				return picked[1];
		}

		return <NotFoundHL />;
	}

	onChoice(choice) {
		console.log(`clicked! ${choice}`);
		this.setState({page:choice});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					Hacklab Dashboard
					{/*<Nav bsStyle="pills" activeKey={1} onSelect={null}>
					<NavItem eventKey={1} href="/home">
					NavItem 1 content
					</NavItem>
					<NavItem eventKey={2} title="Item">
					<NavDropdown eventKey={2} title="NavItem 2 content">
					<MenuItem eventKey={2.1} href="#">Item 2.1</MenuItem>
					<MenuItem eventKey={2.2} href="#">Item 2.2</MenuItem>
					</NavDropdown>
					</NavItem>
					<NavItem eventKey={3}>
					NavItem 3 content
					</NavItem>
					</Nav>*/}
				</header>

				<SidebarHL sidebarContent={this.sidebarItemsJson} onChoice={this.onChoice}></SidebarHL>

				<div className="hacklab-inner-frame">
					{/*[
						<Utilities />,
						<Signs />,
						<Print2dHL />
					][this.state.page]*/
					this.getPage()
					}
				</div>
			</div>
		);
	}
}

export default App;
