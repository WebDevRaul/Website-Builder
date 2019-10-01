import { createSelector } from 'reselect';
import { doSort } from '../utils/sort';

const select_account_state = state => state.user.account;

export const select_account_newUser = createSelector(
  [select_account_state],
  account => account.newUser
);

export const select_account_user = createSelector(
  [select_account_state],
  account => account.user
);
export const select_user_id = createSelector(
  [select_account_state],
  account => account.user.id
);

export const select_account_isAuth = createSelector(
  [select_account_state],
  account => account.isAuth
);

export const select_user_posts = createSelector(
  [select_account_state],
  account => doSort(account.user.posts)
)