import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const PrimaryButtonTouchable = styled.TouchableOpacity`
	height: 100%;
	height: 45px;
	background-color: ${({ theme }) => theme.colors.button};
	border-radius: 16px;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`

export const PrimaryButtonText = styled.Text`
	font-family: ${({ theme }) => theme.fonts.poppins.medium};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.text_white};
`