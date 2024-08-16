import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize"; 

export const InputContainer = styled.View``

export const InputLabel = styled.Text`
	font-family: ${({ theme }) => theme.fonts.poppins.regular};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.primary_light};
	margin-bottom: 2px;
`;

export const InputWrapper = styled.View`
	flex-direction: row;
	padding: 0 16px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 16px;
	width: 100%;
	height: 50px;
	align-items: center;
`;

export const InputField = styled.TextInput`
	flex: 1;
	color: ${({ theme }) => theme.colors.text};
	border-radius: 16px;
	border-bottom: 3px solid red;
	font-family: ${({ theme }) => theme.fonts.poppins.regular};
	font-size: ${RFValue(14)}px;
`;

export const InputErrorWrapper = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 4px;
`

export const InputError = styled.Text`
	color: ${({ theme }) => theme.colors.attention};
	font-family: ${({ theme }) => theme.fonts.poppins.medium};
	text-align: left;
	font-size: ${RFValue(12)}px;
`