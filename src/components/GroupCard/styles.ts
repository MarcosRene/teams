import { TouchableOpacity } from 'react-native';
import { UsersThree } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    height: 90px;
    width: 100%;
    margin-bottom: 12px;
    padding: 24px;

    background-color: ${theme.COLORS.GRAY_500};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill',
}))`
  margin-right: 20px;
`;
