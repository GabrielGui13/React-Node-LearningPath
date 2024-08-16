import { LanguageType } from "./types";

export const textDataEN: LanguageType = {
	language: "en",
	loginScreen: {
		welcome: "Welcome, here you will be able to track your Interas tickets.",
		loginForm: {
			email: "Email",
			password: "Password",
			emailPlaceholder: "Enter your email",
			passwordPlaceholder: "Enter your password",
			sendButton: "Login",
		},
		forgotPassword: "Forgot your password?",
		registerLink: {
			text: "Don't have an account yet?",
			link: "Sign up",
		},
		loginWithInviteCode: "Login with invite code",
		generateAccessCode: "Generate access code",
	}
}