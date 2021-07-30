import axios from 'axios'

const Items_REST_API_URL = 'http://localhost:8080/items/';
const Items_Name_URL = 'http://localhost:8080/items/title=';
const Items_Genre_URL = 'http://localhost:8080/items/genre=';

class ItemService {

    getItems(){
        return axios.get(Items_REST_API_URL);
    }
    getItemById(itemId){
        return axios.get(Items_REST_API_URL + itemId );
    }
    getItemByName(gameName){
        gameName.replace(" ","%20");
        return axios.get(Items_Name_URL+gameName);
    }
    getItemByGerne(gameGerne){
        // gameGerne.replace(" ","%20");
        return axios.get(Items_Genre_URL+gameGerne);
    }
    
}

export default new ItemService();