import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const LoginContainer = styled.SafeAreaView`
	flex: 1;
	background-color: #fff;
	align-items: center;
	justify-content: center;
`

export const LoginText = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-size: ${RFValue(24)}px;
	font-family: ${({ theme }) => theme.fonts.poppins.medium};
`