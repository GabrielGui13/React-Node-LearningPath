import { createContext, useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IAuthContextData, IAuthProviderProps, IAuthenticateUserProps, IUser } from "./types/authTypes";

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export const AuthContextProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const signIn = useCallback(
    async ({ email, password }: IAuthenticateUserProps) => {
      //fetch data

      const data = {} as IUser;

      setUser(data);

      await AsyncStorage.setItem("@interas:token", "token");
    },
    [],
  );

  const signOut = useCallback(async () => {
    setUser({} as IUser);

    await AsyncStorage.removeItem("@interas:token");
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
