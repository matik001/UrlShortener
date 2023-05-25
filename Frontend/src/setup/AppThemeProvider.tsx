import { ConfigProvider, theme as antdTheme } from 'antd';
import React, { ReactNode, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

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
	const themeDark: AppTheme = {
		primaryColor: 'orange',
		bgColor: '#111111'
	};
	const themeLight: AppTheme = {
		primaryColor: '#6b43c9',
		bgColor: '#acbede'
	};
	const { isDarkMode } = useDarkMode();
	const theme = isDarkMode ? themeDark : themeLight;
	const { defaultAlgorithm, darkAlgorithm } = antdTheme;

	return (
		<ThemeProvider theme={theme}>
			<ConfigProvider
				theme={
					isDarkMode
						? {
								token: {
									colorPrimary: theme.primaryColor,
									colorBgBase: theme.bgColor
								},
								algorithm: darkAlgorithm
						  }
						: {
								token: {
									colorPrimary: theme.primaryColor
								},
								algorithm: defaultAlgorithm
						  }
				}
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
