/**
 * @flow
 *
 * Helpers for navigation.
 */

import type {
  NavigationAction,
  NavigationProp,
  NavigationParams,
} from './TypeDefinition';

import NavigationActions from './NavigationActions';

_goBack = (key?: ?string): boolean =>
  navigation.dispatch(
    NavigationActions.back({
      key: key === undefined ? navigation.state.key : key,
    })
  )

_navigate = (
  routeName: string,
  params?: NavigationParams,
  action?: NavigationAction
): boolean =>
  navigation.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
    })
  )

/**
 * For updating current route params. For example the nav bar title and
 * buttons are based on the route params.
 * This means `setParams` can be used to update nav bar for example.
 */
_setParams = (params: NavigationParams): boolean =>
  navigation.dispatch(
    NavigationActions.setParams({
      params,
      key: navigation.state.key,
    })
  )

export default function<S: *>(navigation: NavigationProp<S, NavigationAction>) {
  return {
    ...navigation,
    goBack: _goBack,
    navigate: _navigate,
    setParams: _setParams,
  };
}
