import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export type ButtonIconTypeStyleProps = 'primary' | 'secondary';

type ContainerProps = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  margin-left: 12px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs<ContainerProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)``;
