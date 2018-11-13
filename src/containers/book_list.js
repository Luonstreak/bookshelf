import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
	constructor(props){
		super(props);
		this.renderList = this.renderList.bind(this);
	}

	renderList(){
		return this.props.books.map(el => {
      return <li key={el.title}>{el.title}</li>;
    });	
	}

	render(){
		if (!this.props.books) {
			return <h1>Loading books...</h1>
		}
		return <div>
				<ul>
					{this.renderList()}
				</ul>
      </div>;
	}
}

function mapStateToProps(state){
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(BookList);