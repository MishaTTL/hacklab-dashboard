import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import SidebarHL from './sidebar';
import UtilitiesHL from './pages/utilities';
import Print2dHL from './pages/2dPrint';
import NotFoundHL from './pages/notFound';
import SignsHL from './pages/signs';
import ParkingSpotHL from './pages/parking_spot';
//import { ParkingSpotHL, Print2dHL, SignsHL, UtilitiesHL, NotFoundHL } from './pages/allPages';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {page:1};
		this.onChoice = this.onChoice.bind(this);

		this.sidebarItemsJson = {
			"Members": {
				"Members": null,
				"Administration": null,
				"Alumni": null,
				"Friends of Hacklab": null,
				"Skill Badges": null
			},
			"Transport": {
				"Parking Spot": ParkingSpotHL,
				"Transit Info": null
			},
			"Occupancy": {
				"Interior Sensors": null,
				"Door Bot": null
			},
			"Equipment": {
				"Laser Cutter": null,
				"3D Printers": null,
				"2D print or scan": Print2dHL
			},
			"Events": {
				"Calendar": null,
				"Door Mode": null,
				"DJ Console": null
			},
			"Sound System": null,
			"Sign and Display": SignsHL,
			"Communications": null,
			"Statistics": null,
			"Utilities": UtilitiesHL,
			"Sysadmin": {
				"Local Server": null,
				"Remote Server": null,
				"Network": null
			},
			"Report a Problem": null
		};

		this.sidebarItemsJsonFlat = this.flattenSidebarItemsTree(this.sidebarItemsJson);
	}

	flattenSidebarItemsTree(tree) {
		let flatTree = {}
		for (const key in tree) {
			const value = tree[key];
			if (!value || typeof value == "function")
				flatTree[key.toLowerCase().split(' ').join('_')] = value ? value : NotFoundHL;
			else
				for (const subkey in value) flatTree[subkey.toLowerCase().split(' ').join('_')] = value[subkey] ? value[subkey] : NotFoundHL;
		}
		return flatTree;
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

				<HashRouter>
					<div className="hacklab-inner-frame">
						<Route exact path="/" component={NotFoundHL} />
						{Object.keys(this.sidebarItemsJsonFlat).map( (key, idx) => <Route key={idx} path={`/${key}`} component={this.sidebarItemsJsonFlat[key]} />)}
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default App;
