import { memo, useContext, useEffect, useState } from 'react';
import { Paper, Typography, Stack } from '@mui/material';
import { StateContext } from '../../store/DataProvider';
import Page from '../../components/Page';
import ClientTable from '../../components/pages/clients/ClientTable';
import Search from '../../components/basic/search/Search';
import CustomButton from '../../components/basic/buttons/CustomButton';
import { getClients } from '../../services/api';
import CustomModal from '../../components/basic/modal/CustomModal';
import ClientModalTitle from '../../components/pages/clientModal/ClientModalTitle';
import ClientModalContent from '../../components/pages/clientModal/ClientModalContent';

function Clients() {
	const { state, dispatch } = useContext(StateContext);
	const { clients, filteredClients } = state;

	const [openClientModal, setOpenClientModal] = useState(false);

	useEffect(() => {
		getClients().then((clients) => {
			dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients });
			dispatch({ type: 'SEARCH_CLIENTS', data: clients });
		});
	}, [dispatch]);

	function handleClientSearch(searchKeyword: string) {
		if (!searchKeyword) {
			dispatch({ type: 'SEARCH_CLIENTS', data: clients });
			return;
		}
		dispatch({
			type: 'SEARCH_CLIENTS',
			data: clients.filter((client) => {
				return `${client.firstName} ${client.lastName}`.toLowerCase().includes(searchKeyword.toLowerCase());
			}),
		});
	}

	function handleClientModalOpen() {
		setOpenClientModal(true);
	}

	function handleClientModalClose() {
		setOpenClientModal(false);
	}

	return (
		<>
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
					<CustomButton label='Create new client' size='large' onClick={handleClientModalOpen} />
				</Stack>
				<Paper sx={{ margin: 'auto', marginTop: 2 }}>
					<ClientTable clients={filteredClients} />
				</Paper>
				<CustomModal
					open={openClientModal}
					onClose={() => setOpenClientModal(false)}
					modalTitle={<ClientModalTitle handleClose={handleClientModalClose} />}
					modalContent={<ClientModalContent handleComplete={handleClientModalClose} />}
				/>
			</Page>
		</>
	);
}

export default memo(Clients);
