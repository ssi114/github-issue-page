import { API_CALL_GET_BUG_LIST, BUG_LIST_RECEIVED } from "./constants"

function reducerSwitch(state = {}, action) {
    switch (action.type) {
        case BUG_LIST_RECEIVED:
            return {
                ...state,
                bugList: action.data
            }
        default:
            return state
    }
}

export default reducerSwitch;