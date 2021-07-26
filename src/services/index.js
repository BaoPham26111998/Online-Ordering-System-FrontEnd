import axios from 'axios'

const Items_REST_API_URL = 'http://localhost:8080/items/';

class ItemService {

    getItems(){
        return axios.get(Items_REST_API_URL);
    }
    getItemById(itemId){
        return axios.get(Items_REST_API_URL +itemId );
    }
}

export default new ItemService();