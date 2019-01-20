import React, { Component } from 'react';
import SidebarHL from './sidebar';
import Utilities from './pages/utilities';
import Print2dHL from './pages/2dPrint';
import Signs from './pages/signs';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {page:1};
		this.onChoice = this.onChoice.bind(this);
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

				<SidebarHL onChoice={this.onChoice}></SidebarHL>

				<div className="hacklab-inner-frame">
					{[
						<Utilities />,
						<Signs />,
						<Print2dHL />
					][this.state.page-1]}
				</div>
			</div>
		);
	}
}

export default App;
