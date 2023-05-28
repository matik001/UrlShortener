import { Spin } from 'antd';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import React, { ReactNode, useEffect, useState } from 'react';
import { initReactI18next } from 'react-i18next';

interface AppTranslationsProviderProps {
	children: ReactNode;
}

const resources = {
	en: {
		translation: {
			EnterYourUrl: 'Enter your url',
			Shorten: 'Shorten',
			YourUrl: 'Your url',
			MoreInfo: 'More info'
		}
	},
	pl: {
		translation: {
			EnterYourUrl: 'Podaj swój url',
			Shorten: 'Skróć',
			YourUrl: 'Twój url',
			MoreInfo: 'Więcej informacji'
		}
	}
};
declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'en';
		resources: (typeof resources)['en'];
	}
}
const AppTranslationsProvider: React.FC<AppTranslationsProviderProps> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		i18next.use(initReactI18next).use(LanguageDetector).init({
			fallbackLng: 'en',
			resources: resources
		});
		setIsLoading(false);
	}, []);
	return <>{isLoading ? <Spin /> : children}</>;
};

export default AppTranslationsProvider;
