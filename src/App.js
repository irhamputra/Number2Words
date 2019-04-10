import React, {Component} from 'react';
import Converter from "number-to-words";
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import Clipboard from 'clipboard';

class App extends Component {
	state = {
		converter: ''
	};
	
	componentDidMount() {
		this.clipboard = new Clipboard('.converter');
		this.clipboard.on('success', () => {
			console.log('Copied')
		})
	}
	
	onSubmit = (e) => {
		e.preventDefault();
		let value = e.target.elements.convert.value;
		return this.setState({converter: Converter.toWords(value)});
	};
	
	render() {
		const { converter } = this.state;
		return (
			<Container>
				<h1>Number to words converter</h1>
				<Form onSubmit={this.onSubmit}>
					<FormGroup>
						<Label>Value
							<Input type="number" name="convert" defaultValue={'0'}/>
						</Label>
					</FormGroup>
					<Button color="danger">Convert to words</Button>
				</Form>
				
				{converter &&
				<div>
					<h3>{converter}</h3>
					<Button
						data-clipboard-text={converter}
						data-clipboard-action="copy"
						className="converter"
					>
						Copy
					</Button>
				</div>}
			</Container>
		);
	}
}

export default App;
