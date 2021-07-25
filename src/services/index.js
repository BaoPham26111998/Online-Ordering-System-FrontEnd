import axios from "../../node_modules/axios/index";
const ITEMS_URL = "http://localhost:8080/items/";

class DataService{
    getItems(){
        return axios.get(ITEMS_URL);
    }
}

export default new DataService();