import { NavigationActions, StackActions } from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

// I intuitively did this to cater for the related products
function push(routeName, params) {
  _navigator.dispatch(
    StackActions.push({
      routeName,
      params
    })
  );
}

// I intuitively did this to cater for the related products
function popTotop() {
  _navigator.dispatch(StackActions.popToTop());
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  push,
  popTotop
};
