import * as types from './actionTypes';

export const fetchGames = (item) => ({
    type: types.FETCH_FUTURE_GAMES,
    item,
});

export const addGame = (item) => ({
    type: types.ADD_GAME,
    item,
});

export const fetchFindGames = (item) => ({
   type: types.FETCH_FIND_GAMES,
   item,
});

export const fetchPastGames = (item) => ({
    type: types.FETCH_PAST_GAMES,
    item,
});
export const saveFilterQuery = (query) => ({
    type: types.SAVE_FILTER_QUERY,
    query
});

export const setFiltering = item => ({
    type: types.SET_FILTERING,
    item,
})
