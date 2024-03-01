import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export interface CustomButtonProps extends ButtonProps<'button'> {
	label: string;
	onClick?: () => {};
}

export default function CustomButton({ variant, label, disabled, color, size, ...rest }: CustomButtonProps) {
	<Button
		variant={variant || 'contained'}
		disabled={disabled || false}
		color={color || 'primary'}
		size={size || 'medium'}
		{...rest}
	>
		{label}
	</Button>;
}
