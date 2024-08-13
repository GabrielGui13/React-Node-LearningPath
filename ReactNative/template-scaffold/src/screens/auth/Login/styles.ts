import styled from "styled-components/native";

export const LoginContainer = styled.View`
	flex: 1;
	background-color: #fff;
	align-items: center;
	justify-content: center;
`

export const LoginText = styled.Text`
	color: ${({ theme }) => theme.colors.primary}
`