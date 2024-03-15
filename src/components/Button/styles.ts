import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'primary' | 'secondary';

type ContainerProps = {
  type: ButtonTypeStyleProps;
};

const variantType = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.RED_DARK};
  `,
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  ${({ type }) => variantType[type]};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
