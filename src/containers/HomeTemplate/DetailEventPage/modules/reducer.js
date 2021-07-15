import * as ActionType from "./constants";

let initialState = {
    loading: false,
    data: null,
    err: null,
};

const detailEventReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.DETAIL_EVENT_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.DETAIL_EVENT_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.DETAIL_EVENT_FAILED:
            state.loading = false;
            state.data = null
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
};

export default detailEventReducer;