import { useState, ChangeEvent } from 'react';
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export interface SearchProps {
	placeholder: string;
	onSearch: (keyword: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
	const [searchKeyword, setSearchKeyword] = useState('');

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchKeyword(e.target.value);
		onSearch(e.target.value);
	};

	return (
		<FormControl variant='outlined'>
			<OutlinedInput
				id='outlined-adornment-search'
				endAdornment={
					<InputAdornment position='end'>
						<SearchIcon />
					</InputAdornment>
				}
				aria-describedby='outlined-search-text'
				inputProps={{
					'aria-label': 'search',
				}}
				size='small'
				placeholder='Search clients...'
				value={searchKeyword}
				onChange={handleSearch}
				sx={{ backgroundColor: 'white' }}
			/>
		</FormControl>
	);
}
