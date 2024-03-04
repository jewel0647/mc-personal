import { useState, useContext } from 'react';
import { Box, Stepper, Step, StepLabel, Typography, Stack, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { StateContext } from '../../../store/DataProvider';

import CustomButton from '../../basic/buttons/CustomButton';
import CustomInput from '../../basic/input/CustomInput';

import { createClient, getClients } from '../../../services/api';
import { phoneReg } from '../../../utils';

const clientModalSteps = ['Personal details', 'Contact details'];

interface ClientModalContentProps {
	handleComplete: () => void;
}

export default function ClientModalContent({ handleComplete }: ClientModalContentProps) {
	const { dispatch } = useContext(StateContext);

	const [activeStep, setActiveStep] = useState(0);

	const formik = useFormik({
		initialValues: {
			id: '0',
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required('First name is required'),
			lastName: Yup.string().required('Last name is required'),
			email: Yup.string().email('Invalid email format').required('Email is required'),
			phoneNumber: Yup.string()
				.matches(phoneReg, 'Phone number is not valid')
				.required('Phone number is required'),
		}),
		onSubmit: (values) => {
			createClient(values).then(() => {
				getClients().then((clients) => {
					dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients });
					dispatch({ type: 'SEARCH_CLIENTS', data: clients });
				});
			});

			handleComplete();
		},
	});

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<>
			<Box sx={{ width: '100%' }}>
				<Stepper
					activeStep={activeStep}
					sx={{
						marginBottom: '30px',
						'& .MuiStepIcon-root.Mui-completed': {
							color: 'green',
						},
					}}
				>
					{clientModalSteps.map((label) => {
						return (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				<form onSubmit={formik.handleSubmit}>
					{activeStep === 0 && (
						<Grid container direction='column' alignItems='flex-end' rowSpacing='12'>
							<Grid item sx={{ width: '100%' }}>
								<CustomInput
									id='firstName'
									name='firstName'
									value={formik.values.firstName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.firstName && Boolean(formik.errors.firstName)}
									helperText={formik.touched.firstName && formik.errors.firstName}
									label='First name'
								/>
							</Grid>
							<Grid item sx={{ width: '100%' }}>
								<CustomInput
									id='lastName'
									name='lastName'
									value={formik.values.lastName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.lastName && Boolean(formik.errors.lastName)}
									helperText={formik.touched.lastName && formik.errors.lastName}
									label='Last name'
								/>
							</Grid>
							<Grid item sx={{ marginTop: '40px' }}>
								<CustomButton
									variant='contained'
									label='Continue'
									onClick={handleNext}
									disabled={
										!formik.touched.firstName ||
										Boolean(formik.errors.firstName) ||
										!formik.touched.lastName ||
										Boolean(formik.errors.lastName)
									}
								/>
							</Grid>
						</Grid>
					)}
					{activeStep === clientModalSteps.length - 1 && (
						<Grid container direction='column' rowSpacing='12'>
							<Grid item sx={{ width: '100%' }}>
								<CustomInput
									id='email'
									name='email'
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.email && Boolean(formik.errors.email)}
									helperText={formik.touched.email && formik.errors.email}
									label='Email'
								/>
							</Grid>
							<Grid item sx={{ width: '100%' }}>
								<CustomInput
									id='phoneNumber'
									name='phoneNumber'
									value={formik.values.phoneNumber}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
									helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
									label='Phone number'
								/>
							</Grid>
							<Grid
								container
								direction='row'
								justifyContent='space-between'
								item
								sx={{ marginTop: '40px' }}
							>
								<CustomButton
									variant='text'
									label='Back'
									startIcon={<ArrowBackIcon />}
									onClick={handleBack}
								/>
								<CustomButton
									variant='contained'
									label='Create Client'
									type='submit'
									disabled={
										!formik.touched.email ||
										Boolean(formik.errors.email) ||
										!formik.touched.phoneNumber ||
										Boolean(formik.errors.phoneNumber)
									}
								/>
							</Grid>
						</Grid>
					)}
				</form>
			</Box>
		</>
	);
}
