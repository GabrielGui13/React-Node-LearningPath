import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize"; 

export const InputContainer = styled.View``

export const InputWrapper = styled.View`
	flex-direction: row;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 16px;
	width: 100%;
	height: ${RFValue(45)}px;
`;

export const InputLabel = styled.Text`
	font-family: ${({ theme }) => theme.fonts.poppins.regular};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.primary_light};
	margin-bottom: ${RFValue(2)}px;
`;

export const InputField = styled.TextInput`
	flex: 1;
	padding: 0 16px;
	color: ${({ theme }) => theme.colors.text};
	border-radius: 16px;
	border-bottom: 3px solid red;
	font-family: ${({ theme }) => theme.fonts.poppins.regular};
	font-size: ${RFValue(16)}px;
`;