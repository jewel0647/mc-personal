import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export interface CustomModalProps {
	open: boolean;
	onClose: () => void;
	modalTitle: React.ReactNode;
	modalContent: React.ReactNode;
	modalActions?: React.ReactNode;
}

export default function CustomModal({ open, onClose, modalTitle, modalContent, modalActions }: CustomModalProps) {
	return (
		<React.Fragment>
			<Dialog
				fullWidth
				open={open}
				onClose={onClose}
				aria-labelledby='cutom-dialog-title'
				aria-describedby='custom-dialog-description'
			>
				<DialogTitle id='custom-dialog-title'>{modalTitle}</DialogTitle>
				<DialogContent>{modalContent}</DialogContent>
				{modalActions && <DialogActions>{modalActions}</DialogActions>}
			</Dialog>
		</React.Fragment>
	);
}
