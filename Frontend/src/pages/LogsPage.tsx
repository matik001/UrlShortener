import { useQuery } from '@tanstack/react-query';
import { getLogs } from 'api/shortenerApi';
import { useParams } from 'react-router-dom';
import MainTemplatePage from './templates/MainTemplatePage';
const LogsPage = () => {
	const { logKey } = useParams();
	const { data } = useQuery(['GetLogs', logKey], () => {
		return getLogs(logKey!);
	});
	return (
		<MainTemplatePage>
			{!data ? (
				<></>
			) : (
				<>
					<h3>URL: {data.url}</h3>
					{data.urlLogs.map((log) => {
						return (
							<h5 key={log.id}>
								{log.date.toString()} {log.ip}
							</h5>
						);
					})}
				</>
			)}
		</MainTemplatePage>
	);
};

export default LogsPage;
