export type LanguageNameType = 'pt' | 'en' | 'es' | 'fr';

export type LanguageType = {
	language: LanguageNameType | string,
	loginScreen: {
		welcome: string;
		loginForm: {
			email: string;
			password: string;
			emailPlaceholder: string;
			passwordPlaceholder: string;
			sendButton: string;
		},
		forgotPassword: string;
		registerLink: {
			text: string;
			link: string;
		},
		loginWithInviteCode: string;
		generateAccessCode: string;
	}
}