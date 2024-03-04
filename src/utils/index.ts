export const phoneReg =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const Emailreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string) {
	return Emailreg.test(email);
}

export function validateClient(client: IClient) {
	return !client.firstName && !client.firstName && !client.lastName && validateEmail(client.email);
}
