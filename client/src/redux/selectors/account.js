import { createSelector } from 'reselect';

const select_account_state = state => state.user.account;

export const select_account_newUser = createSelector(
  [select_account_state],
  account => account.newUser
);

export const select_account_user = createSelector(
  [select_account_state],
  account => account.user
);

export const select_account_isAuth = createSelector(
  [select_account_state],
  account => account.isAuth
);