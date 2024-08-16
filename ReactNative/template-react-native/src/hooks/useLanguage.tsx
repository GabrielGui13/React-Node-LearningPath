import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"

export const useLanguage = () => {
	const language = useContext(LanguageContext);

	if (!language) {
    throw new Error('useLanguage must be used within a LanguageContextProvider');
  }

	return language;
}