import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import { getLogs } from 'api/shortenerApi';
import Logs from 'components/Logs/Logs';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MainTemplatePage from './templates/MainTemplatePage';
const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 70%;
	padding: 20px 30px 15px 30px;
	margin-top: 20px;
	position: relative;
`;
const LogsPage = () => {
	const { logKey } = useParams();
	const { data: url } = useQuery(['GetLogs', logKey], () => {
		return getLogs(logKey!);
	});
	return (
		<MainTemplatePage>
			<Container>{!url ? <Spin /> : <Logs url={url} />}</Container>
		</MainTemplatePage>
	);
};

export default LogsPage;
