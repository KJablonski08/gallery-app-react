import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchButtons from './components/SearchButtons';
import Routes from './Routes';

function App() {
	const [query, setQuery] = useState('dogs');

	return (
		<div className='App'>
			<SearchBar query={query} setQuery={setQuery} />
			<SearchButtons query={query} setQuery={setQuery} />
			<Routes query={query} />
		</div>
	);
}

export default App;
