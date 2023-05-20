import { ConfigProvider, theme as antdTheme } from 'antd';
import React, { ReactNode, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

interface AppThemeProviderProps {
	children: ReactNode;
}
const GlobalStyle = createGlobalStyle`
body, html, #root {
  width: 100%;
  margin: 0;
  background-color: ${(args) => args.theme.bgColor};
  color: ${(args) => args.theme.primaryColor};
}
*{
	font-family: 'Roboto', sans-serif;
}
`;
export interface AppTheme {
	primaryColor: string;
	bgColor: string;
}
declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends AppTheme {}
}
const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
	const theme: AppTheme = {
		primaryColor: 'orange',
		bgColor: '#111111'
	};
	const [isDarkMode, setIsDarkMode] = useState(true);
	const { defaultAlgorithm, darkAlgorithm } = antdTheme;

	return (
		<ThemeProvider theme={theme}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: theme.primaryColor,
						colorBgBase: theme.bgColor
					},
					algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm
				}}
			>
				<>
					<GlobalStyle />
					{children}
				</>
			</ConfigProvider>
		</ThemeProvider>
	);
};

export default AppThemeProvider;
