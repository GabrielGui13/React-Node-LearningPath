import { createContext, PropsWithChildren, useEffect, useState } from "react"
import { textDataPT } from "../lang/pt"
import { textDataEN } from '../lang/en';
import { textDataES } from '../lang/es';
import { textDataFR } from "../lang/fr";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageNameType, LanguageType } from "../lang/types";

const languageList = [textDataPT.language, textDataEN.language, textDataES.language, textDataFR.language];

const initialState: LanguageType = textDataPT;

interface LanguageContextType {
	textData: LanguageType;
	switchLanguage: (lang: LanguageNameType) => void;
}

export const LanguageContext = createContext({} as LanguageContextType)

export const LanguageContextProvider = (props: PropsWithChildren) => {
	const languageSelector = {
		[`${textDataEN.language}`]: textDataEN,
		[`${textDataPT.language}`]: textDataPT,
		[`${textDataES.language}`]: textDataES,
		[`${textDataFR.language}`]: textDataFR,
	}

	const [language, setLanguage] = useState<LanguageType>(initialState);

	const checkLanguage = () => {
		const getLanguage = AsyncStorage.getItem('lang').then(lang => lang).toString() || 'pt';

		if (languageList.includes(getLanguage)) {
			AsyncStorage.setItem('lang', getLanguage);
			setLanguage(languageSelector[getLanguage]);
		}
		else {
      AsyncStorage.setItem('lang', 'pt');
			setLanguage(languageSelector[textDataPT.language]);
    }
	}

	useEffect(() => {
		checkLanguage();
	}, []);

	const switchLanguage = (lang: LanguageNameType) => {
		localStorage.setItem('lang', lang);
		setLanguage(languageSelector[lang]);
	}

	const contextValue: LanguageContextType = {
		textData: language,
    switchLanguage
	}

	return (
    <LanguageContext.Provider value={ contextValue } >
			{props.children}
		</LanguageContext.Provider>
  )
}