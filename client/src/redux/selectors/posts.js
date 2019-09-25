import { createSelector } from 'reselect';
import { doSort } from '../utils/sort';

const select_posts_state = state => state.posts.posts;

export const select_posts = createSelector(
  [select_posts_state],
  posts => doSort(posts)
);