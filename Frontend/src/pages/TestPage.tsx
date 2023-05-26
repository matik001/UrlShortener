import { Switch } from 'antd';
import Shortener from 'components/Shortener/Shortener';
import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';
const Title = styled.h1`
	text-align: center;
	font-weight: 400;
	font-size: 46px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	pointer-events: none;
	user-select: none;
`;
const ThemeSwitch = styled(Switch)`
	position: absolute;
	right: 30px;
	top: 30px;
	& .ant-switch-handle::before {
		background-color: black;
	}
	/* width: 50px; */
`;
const DarkModeIcon = styled(MdOutlineDarkMode)`
	font-size: 18px;
`;
const LightModeIcon = styled(MdOutlineWbSunny)`
	font-size: 18px;
`;
const TestPage = () => {
	const { isDarkMode, toggle } = useDarkMode(true);
	return (
		<div>
			<ThemeSwitch
				onClick={toggle}
				checkedChildren={<DarkModeIcon />}
				unCheckedChildren={<LightModeIcon />}
				defaultChecked
			/>

			<Title>Super Url Shortener</Title>
			<Shortener />
		</div>
	);
};

export default TestPage;
