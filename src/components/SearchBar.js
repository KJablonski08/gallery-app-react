import React from 'react';
import {
	Stack,
	Input,
	InputGroup,
	InputLeftElement,
	Container,
	Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
	return (
		<div>
			<Container className='horizontal-spacing'>
				<Stack spacing={4}>
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
						/>
					</InputGroup>
				</Stack>
			</Container>
		</div>
	);
};

export default SearchBar;
