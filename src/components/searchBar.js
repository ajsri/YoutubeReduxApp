import React, { Component } from 'react';
import {Input} from 'react-bootstrap';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}
	onInputChange(e){
  	this.setState({term: e});
		this.props.onSearchChange(this.state.term);
	}

	render() {
		return(
			<div style={{marginTop: 24}}>
				<Input
		      type="text"
		      placeholder="Search"
		      value={this.state.term}
		      onChange={e => this.onInputChange(e.target.value)}/>
      </div>
		);
	}
}

export default SearchBar;