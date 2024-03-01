import { InputLabel, FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
	return (
		<FormControl variant='outlined'>
			<InputLabel htmlFor='search'>Search clients...</InputLabel>
			<OutlinedInput
				id='search'
				endAdornment={
					<InputAdornment position='end'>
						<IconButton edge='end'>
							<SearchIcon />
						</IconButton>
					</InputAdornment>
				}
				label='Search'
			/>
		</FormControl>
	);
}
