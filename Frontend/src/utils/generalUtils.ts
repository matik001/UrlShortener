export const keyToRedirectionUrl = (key: string | undefined) => {
	const newUrl = key
		? `${window.location.origin.toString().replace('https://', '').replace('http://', '')}/${key}`
		: null;
	return newUrl;
};
