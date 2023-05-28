import { Button, Switch } from 'antd';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';
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
interface MainTemplatePageProps {
	children: ReactNode;
}
const MainTemplatePage = ({ children }: MainTemplatePageProps) => {
	const { isDarkMode, toggle } = useDarkMode(true);
	const { t, i18n } = useTranslation();

	return (
		<div>
			<ThemeSwitch
				checked={isDarkMode}
				onClick={toggle}
				checkedChildren={<DarkModeIcon />}
				unCheckedChildren={<LightModeIcon />}
			/>
			<Button
				style={{
					position: 'fixed',
					bottom: '20px',
					right: '20px'
				}}
				onClick={() => i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')}
			>
				{i18n.language === 'pl' ? 'PL' : 'ENG'}
			</Button>

			<Title>Super Url Shortener</Title>
			{children}
		</div>
	);
};

export default MainTemplatePage;
