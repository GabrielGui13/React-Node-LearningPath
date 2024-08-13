import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";

interface AuthGuardProps {
	AuthRoutes: ReactNode;
	children: ReactNode;
}

export const AuthGuard = ({ children, AuthRoutes }: AuthGuardProps) => {
	const activeToken = AsyncStorage.getItem('@interas:token');
	const { user } = useAuth()
	
	if (!activeToken || !user.id) {
		return AuthRoutes; // Redirect to login page or show a message to the user that they need to log in.
	}

	return children
}