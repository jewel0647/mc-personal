import { memo, useContext, useEffect } from 'react';
import { Paper, Typography, Stack } from '@mui/material';
import { StateContext } from '../../store/DataProvider';
import Page from '../../components/Page';
import ClientTable from '../../components/pages/clients/ClientTable';
import Search from '../../components/basic/search/Search';
import CustomButton from '../../components/basic/buttons/CustomButton';
import { getClients } from '../../services/api';

function Clients() {
	const { state, dispatch } = useContext(StateContext);
	const { clients, filteredClients } = state;

	useEffect(() => {
		getClients().then((clients) => {
			dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients });
			dispatch({ type: 'SEARCH_CLIENTS', data: clients });
		});
	}, [dispatch]);

	const handleClientSearch = (searchKeyword: string) => {
		if (!searchKeyword) {
			dispatch({ type: 'SEARCH_CLIENTS', data: clients });
			return;
		}
		dispatch({
			type: 'SEARCH_CLIENTS',
			data: clients.filter((client) => {
				return (client.firstName + client.lastName).toLowerCase().includes(searchKeyword.toLowerCase());
			}),
		});
	};

	return (
		<Page>
			<Typography variant='h4' sx={{ textAlign: 'start' }}>
				Clients
			</Typography>
			<Stack
				sx={{ marginTop: 3 }}
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				spacing={{ xs: 1, sm: 2 }}
			>
				<Search placeholder='Search clients...' onSearch={handleClientSearch} />
				<CustomButton label='Create new client' size='large' />
			</Stack>
			<Paper sx={{ margin: 'auto', marginTop: 2 }}>
				<ClientTable clients={filteredClients} />
			</Paper>
		</Page>
	);
}

export default memo(Clients);
