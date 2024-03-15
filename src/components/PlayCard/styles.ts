import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  ${({ theme }) => css`
    height: 56px;
    width: 100%;
    margin-bottom: 16px;

    background-color: ${theme.COLORS.GRAY_500};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
