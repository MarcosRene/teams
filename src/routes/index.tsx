import { NavigationContainer } from '@react-navigation/native';

import { Container as RoutesContainer } from '@/components/Container';

import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <RoutesContainer>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </RoutesContainer>
  );
}
