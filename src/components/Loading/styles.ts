import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${theme.COLORS.GRAY_600};
  `}
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.COLORS.GRAY_700
}))`
`
