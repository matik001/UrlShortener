import { appAxios } from './apiConfig';
export interface ShortenResponse {
	key: string;
}
export const shorten = async (url: string) => {
	const res = await appAxios.post<ShortenResponse>('/url/shorten', {
		path: url
	});
	return res.data;
};
