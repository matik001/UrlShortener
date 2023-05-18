import React, { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

interface AppThemeProviderProps {
	children: ReactNode;
}
const GlobalStyle = createGlobalStyle`
body, html, #root {
  height: 100%;
  width: 100%;
  margin: 0;
}
`;
export interface AppTheme {
	primaryColor: string;
	secondaryColor: string;
}
declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends AppTheme {}
}
const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
	const theme: AppTheme = {
		primaryColor: 'orange',
		secondaryColor: 'yellow'
	};
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				{children}
			</>
		</ThemeProvider>
	);
};

export default AppThemeProvider;
