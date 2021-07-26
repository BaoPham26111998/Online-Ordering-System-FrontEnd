import axios from 'axios'

const Items_REST_API_URL = 'http://localhost:8080/items';

class ItemService {

    getItems(){
        return axios.get(Items_REST_API_URL);
    }
    getItemById(){
        return axios.get('http://localhost:8080/items/4');
    }
}

export default new ItemService();