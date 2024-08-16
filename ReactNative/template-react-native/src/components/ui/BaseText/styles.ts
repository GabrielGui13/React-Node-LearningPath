import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BaseTextField = styled.Text`
	font-family: ${({ theme }) => theme.fonts.poppins.regular};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.text};
`