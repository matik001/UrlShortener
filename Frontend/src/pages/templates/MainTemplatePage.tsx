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
	showTitle?: boolean;
	children: ReactNode;
}
const MainTemplatePage = ({ children, showTitle }: MainTemplatePageProps) => {
	if (showTitle === undefined) showTitle = true;

	const { isDarkMode, toggle } = useDarkMode(true);
	const { t, i18n } = useTranslation();
	return (
		<>
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
				onClick={() => {
					i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl');
				}}
			>
				{i18n.language === 'pl' ? 'PL' : 'ENG'}
			</Button>
			{showTitle && <Title>{t('AppTitle')}</Title>}

			{children}
		</>
	);
};

export default MainTemplatePage;
