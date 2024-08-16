import { AuthContextProvider } from "./AuthContext";
import { LanguageContextProvider } from "./LanguageContext";
import { ContextsProviderProps } from "./types/contextsTypes";

export const ContextsProvider = ({ children }: ContextsProviderProps) => {
	return (
		<>
			<AuthContextProvider>
				<LanguageContextProvider>
					{children}
				</LanguageContextProvider>
			</AuthContextProvider>
		</>
	)
}