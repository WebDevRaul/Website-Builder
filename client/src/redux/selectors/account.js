import { createSelector } from 'reselect';

const select_account_state = state => state.account.account;

export const select_account_newUser = createSelector(
  [select_account_state],
  account => account.newUser
);

export const select_account_userData = createSelector(
  [select_account_state],
  account => account.userData
);

export const select_account_isAuth = createSelector(
  [select_account_state],
  account => account.isAuth
);