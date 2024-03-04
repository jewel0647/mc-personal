import { Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface ClientModalTitleProps {
	handleClose: () => void;
}

export default function ClientModalTitle({ handleClose }: ClientModalTitleProps) {
	return (
		<Stack direction='row' justifyContent='space-between' sx={{ padding: '20px' }}>
			<Typography variant='h5' sx={{ textAlign: 'start' }}>
				Create new client
			</Typography>
			<CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
		</Stack>
	);
}
