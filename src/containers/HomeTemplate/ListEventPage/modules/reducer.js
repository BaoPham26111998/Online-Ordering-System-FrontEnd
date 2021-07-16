import * as ActionType from "./constants";

// reducer do not approve async actions, data
// solve async actions, data then reducer accept actions (user redux thunk)

let initialState = {
    loading: false,
    data: null,
    err: null,
};

const listEventReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_EVENT_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.LIST_EVENT_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null
            return { ...state };
        case ActionType.LIST_EVENT_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    };
};

export default listEventReducer;