import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300
}))`
  ${({ theme }) => css`
    flex: 1;
    padding: 16px;
    max-height: 56px;
    min-height: 56px;
    
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};

    border-radius: 6px;
  `};
`;
