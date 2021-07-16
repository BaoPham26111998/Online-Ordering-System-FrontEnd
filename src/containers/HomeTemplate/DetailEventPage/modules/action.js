import * as ActionType from "./constants";
import Axios from "axios";
import api from "../../../../api";

export const actDetailEventApi = (id) => {
    return dispatch => {
        dispatch(actDetailEventRequest());
        // Axios({
        //     url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
        //     method: "GET",
        // })
        api
            .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((result) => {
                dispatch(actDetailEventSuccess(result.data));
            })
            .catch((err) => {
                dispatch(actDetailEventFailed(err));
            });
    };
};

const actDetailEventRequest = () => {
    return {
        type: ActionType.DETAIL_EVENT_REQUEST,
    };
};

const actDetailEventSuccess = (data) => {
    return {
        type: ActionType.DETAIL_EVENT_SUCCESS,
        payload: data,
    };
};

const actDetailEventFailed = (err) => {
    return {
        type: ActionType.DETAIL_EVENT_FAILED,
        payload: err,
    };
};