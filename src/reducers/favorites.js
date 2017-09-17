import _ from 'lodash/array'
import {
    FETCHING_DATA,
    FETCHED_DATA,
    ADD_AS_FAVORITE,
    FETCHED_DATA_ERROR
} from '../actions'

const defaultData = {
    data: [],
    loading: false
}
export default function reducers(state = defaultData, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return Object.assign({}, state, { loading: true });

        case FETCHED_DATA:
            return Object.assign({}, state, { loading: false, data: action.payload });

        case FETCHED_DATA_ERROR:
            return Object.assign({}, state, { loading: false });

        case ADD_AS_FAVORITE:
            console.log(action);
            var new_state = JSON.parse(JSON.stringify(state));

            function replaceObj(arr, object) {
                var index = _.findIndex(arr, { 'id': object.id });
                arr[index] = object;
            }
            replaceObj(new_state.data, { ...action.payload, isFavorite: true });
            console.log(new_state);
            return new_state;
        case 'REMOVE_AS_FAVORITE':
            console.log(action)
            return Object.assign({}, state);
        default:
            return state;
    }
}