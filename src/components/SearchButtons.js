import React from 'react';
import { Button, HStack } from '@chakra-ui/react';

const SearchButtons = () => {
	return (
		<div className='horizontal-spacing'>
			<HStack spacing='24px' justify='center'>
				<Button colorScheme='blue'>Cats</Button>
				<Button colorScheme='blue'>Dogs</Button>
				<Button colorScheme='blue'>Computers</Button>
			</HStack>
		</div>
	);
};

export default SearchButtons;
