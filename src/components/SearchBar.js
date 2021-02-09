import React, { useState } from 'react';
import {
	Stack,
	Input,
	InputGroup,
	InputLeftElement,
	Container,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ setQuery }) => {
	const [search, setSearch] = useState(null);
	const onSearchChange = (e) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(search);
		e.currentTarget.reset();
	};
	return (
		<div>
			<Container className='horizontal-spacing'>
				<Stack spacing={4}>
					<form onSubmit={handleSubmit}>
						<InputGroup>
							<InputLeftElement
								pointerEvents='none'
								children={<SearchIcon color='gray.300' />}
							/>
							<Input
								focusBorderColor='lime'
								type='search'
								name='search'
								placeholder='Search'
								onChange={onSearchChange}
							/>
						</InputGroup>
					</form>
				</Stack>
			</Container>
		</div>
	);
};

export default SearchBar;
