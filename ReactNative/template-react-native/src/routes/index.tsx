import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthGuard } from "../guards/AuthGuard";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export const Routes = () => {
  return (
    <AuthGuard AuthRoutes={<AuthRoutes />}>
      <AppRoutes />
    </AuthGuard>
  );
};
