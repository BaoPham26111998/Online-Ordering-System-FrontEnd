import * as ActionType from "./constants";
import Axios from "axios";
import api from "../../../../api";

export const actListEventApi = () => {
    return dispatch => {
        dispatch(actListEventRequest());
        // Axios({
        //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        //     method: "GET",
        // })
        api
            .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result) => {
                dispatch(actListEventSuccess(result.data));
            })
            .catch((err) => {
                dispatch(actListEventFailed(err));
            })
    };
};

const actListEventRequest = () => {
    return {
        type: ActionType.LIST_EVENT_REQUEST,
    };
};

const actListEventSuccess = (data) => {
    return {
        type: ActionType.LIST_EVENT_SUCCESS,
        payload: data,
    };
};

const actListEventFailed = (err) => {
    return {
        type: ActionType.LIST_EVENT_FAILED,
        payload: err,
    };
};