let API_URL = "https://swapi.py4e.com/api/people";
const axios = require('axios');

export const dataApiItem = async (id) => {
   try{
    const data = await axios.get(`${API_URL}/${id}`);
    return data;
   } catch (error) {
    return error;  
   } 
}

export const dataApi = async () => {
   try{
    const data = await axios.get(API_URL);
    return data;
   } catch (error) {
    return error;  
   } 
}








