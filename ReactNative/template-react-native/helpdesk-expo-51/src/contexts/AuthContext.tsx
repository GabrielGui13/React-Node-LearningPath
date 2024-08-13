import AsyncStorage from "@react-native-async-storage/async-storage";
import { Children, createContext, ReactNode, useCallback, useState } from "react";

interface IUser {
	id: string;
	name: string;
	email: string;
	company: string;
	unit: string;
	phone: string;
}

interface IAuthenticateUserProps {
	email: string;
	password: string;
}

interface AuthContextData {
	user: IUser;
	signIn({ email, password }: IAuthenticateUserProps): void;
	signOut(): void;
}

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<IUser>({} as IUser);
	
	const signIn = useCallback(
		async ({ email, password }: IAuthenticateUserProps) => {
			//fetch data
			
			const data = {} as IUser;
			
			setUser(data)
			
			await AsyncStorage.setItem('@interas:token', 'token');
		}, 
		[]
	)

	const signOut = useCallback(
		async () => {
			setUser({} as IUser);

			await AsyncStorage.removeItem('@interas:token');
		},
		[]
	)
	
	return (
		<AuthContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}