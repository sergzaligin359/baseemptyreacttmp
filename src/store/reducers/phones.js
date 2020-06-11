import { FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE } from '../types'

const initialState = {}

export const phones = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_START:
            return {
                ...state
            }
        case FETCH_PHONES_SUCCESS:
            return {
                ...state,
                phones: payload
            }
        case FETCH_PHONES_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }   
}