import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Url } from 'types/url';
import { keyToRedirectionUrl } from 'utils/generalUtils';
import Log from './Log/Log';

interface LogsProps {
	url: Url;
}
keyToRedirectionUrl;
const Logs: React.FC<LogsProps> = ({ url }) => {
	const { t } = useTranslation();
	return (
		<>
			<h3 style={{ textAlign: 'center' }}>{`${keyToRedirectionUrl(url.key)} -> ${url.url}`}</h3>
			{url.urlLogs.map((log) => {
				return <Log key={log.id} log={log} />;
			})}
			<div style={{ marginTop: '20px' }}>
				<Link style={{ float: 'left' }} to={`/`}>
					{t('GoToMainPage')}
				</Link>
			</div>
		</>
	);
};

export default Logs;
