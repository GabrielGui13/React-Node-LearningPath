import { LanguageType } from "./types";

export const textDataFR: LanguageType = {
	language: "fr",
	loginScreen: {
		welcome: "Bienvenue, ici vous pourrez suivre vos tickets Interas.",
		loginForm: {
			email: "Email",
			password: "Mot de passe",
			emailPlaceholder: "Entrez votre email",
			passwordPlaceholder: "Entrez votre mot de passe",
			sendButton: "Se connecter",
		},
		forgotPassword: "Mot de passe oublié ?",
		registerLink: {
			text: "Vous n'avez pas encore de compte ?",
			link: "Inscrivez-vous",
		},
		loginWithInviteCode: "Se connecter avec un code d'invitation",
		generateAccessCode: "Générer un code d'accès",
	}
}