import { Switch } from 'antd';
import Shortener from 'components/Shortener/Shortener';
import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

const Title = styled.h1`
	text-align: center;
	font-weight: 400;
	font-size: 46px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	pointer-events: none;
	user-select: none;
`;

const TestPage = () => {
	const { isDarkMode, toggle } = useDarkMode(true);
	return (
		<div>
			<Switch
				onClick={toggle}
				checkedChildren={<>Dark mode</>}
				unCheckedChildren={<>Light mode</>}
				defaultChecked
			/>
			<Title>Super Url Shortener</Title>
			<Shortener />
		</div>
	);
};

export default TestPage;
