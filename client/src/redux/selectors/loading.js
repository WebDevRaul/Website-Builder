import { createSelector } from 'reselect';

const select_loading_state = state => state.loading;

export const select_loading = createSelector(
  [select_loading_state],
  loading => loading.isLoading
);