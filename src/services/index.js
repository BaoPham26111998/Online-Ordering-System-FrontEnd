import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

const Items_REST_API_URL = '/items/';
const Items_Name_URL = '/items/title=';
const Items_Genre_URL = '/items/genre=';

const Users_REST_API_URL = '/users';
const Users_Register_URL = '/register';

const Orders_REST_API_URL = '/orders';


class DataServices {

    //Item Axios
    getItems() {
        return axios.get(Items_REST_API_URL);
    }

    getItemById(itemId) {
        return axios.get(Items_REST_API_URL + itemId);
    }

    postItem(data) {
        return axios.post(Items_REST_API_URL, data);
    }

    updateItemById(itemId, data) {
        return axios.put(Items_REST_API_URL + itemId, data);
    }

    deleteItemById(itemId) {
        return axios.delete(Items_REST_API_URL + itemId);
    }

    getItemByName(gameName) {
        gameName.replace(" ", "%20");
        return axios.get(Items_Name_URL + gameName);
    }
    
    getItemByGerne(gameGerne) {
        // gameGerne.replace(" ", "%20");
        return axios.get(Items_Genre_URL + gameGerne);
    }

    //User Axios 
    getUsers() {
        return axios.get(Users_REST_API_URL);
    }

    getUserById(userId) {
        return axios.get(Users_REST_API_URL + userId);
    }

    postUser(data) {
        return axios.post(Users_Register_URL, data);
    }

    // Order Axios
    postOrder(data){
        return axios.post(Orders_REST_API_URL,data)
    }

}

export default new DataServices();