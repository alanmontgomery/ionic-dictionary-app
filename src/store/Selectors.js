import { createSelector } from 'reselect';

const getState = state => state;

//  General getters
export const getFavourites = createSelector(getState, state => state.favourites);
export const getPopularWords = createSelector(getState, state => state.popularWords);
export const getSearchCount = createSelector(getState, state => state.searchCount);