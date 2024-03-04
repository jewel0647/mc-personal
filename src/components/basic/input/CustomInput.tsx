import { FormControl, InputLabel, FormHelperText, InputProps, OutlinedInput } from '@mui/material';

export interface CustomInputProps extends InputProps {
	label?: string;
	helperText?: string | boolean | undefined;
}

export default function CustomInput({ id, name, value, onChange, onBlur, error, helperText, label }: CustomInputProps) {
	return (
		<FormControl fullWidth>
			{label && (
				<InputLabel shrink htmlFor={id} sx={{ left: 0, transform: 'translate(0px, -9px) scale(0.75)' }}>
					{label}
				</InputLabel>
			)}
			<OutlinedInput
				fullWidth
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				error={error}
				sx={{ marginTop: '12px' }}
			/>
			{helperText && <FormHelperText sx={{ color: 'red' }}>{helperText}</FormHelperText>}
		</FormControl>
	);
}
