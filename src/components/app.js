import React from 'react';
import BookList from '../containers/book_list';


class App extends React.Component {
	constructor(props){ 
		super(props);
	}

	render(){
		return <div>
			<h1>BOOK-SHELF</h1>
			<BookList/>
		</div>
	}
}

export default App;