import axios from 'axios'
export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHED_DATA = 'FETCHED_DATA'
export const ADD_AS_FAVORITE = 'ADD_AS_FAVORITE'
export const FETCHED_DATA_ERROR = 'FETCHED_DATA_ERROR'

export const fetchData = () => {
    return dispatch => {
        let url = 'http://54.254.198.83:8080/favourite.json'
        let proxyurl = 'https://cors-anywhere.herokuapp.com/'
        dispatch({ type: FETCHING_DATA })
        axios({
            url: proxyurl + url,
            method: 'get',
            headers: { 'Access-Control-Allow-Origin': '*' }
        }).then(resp => {
            var data = resp.data.map((obj, i) => Object.assign(obj, {
                id: Date.now() + i,
                isFavorite: false
            }))
            dispatch({ type: FETCHED_DATA, payload: data })
        }).catch(error => {
            dispatch({ type: FETCHED_DATA_ERROR })
        })

    }
}

function shouldFetchData(state, subreddit) {
    // console.log(state);
    return !state.favorites.data.length
}

export function fetchDataIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchData(getState())) {
            return dispatch(fetchData())
        }
    }
}

export const addAsFavorite = obj => {
    return {
        type: ADD_AS_FAVORITE,
        payload: obj
    }
}