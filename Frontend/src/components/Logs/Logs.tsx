import React from 'react';
import { Url } from 'types/url';
import { keyToRedirectionUrl } from 'utils/generalUtils';
import Log from './Log/Log';

interface LogsProps {
	url: Url;
}
keyToRedirectionUrl;
const Logs: React.FC<LogsProps> = ({ url }) => {
	return (
		<>
			<h3 style={{ textAlign: 'center' }}>{`${keyToRedirectionUrl(url.key)} -> ${url.url}`}</h3>
			{url.urlLogs.map((log) => {
				return <Log key={log.id} log={log} />;
			})}
		</>
	);
};

export default Logs;
