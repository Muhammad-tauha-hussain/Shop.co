import axios from "axios"
export const fetching_Data = async () =>{
    try {
        const res = await axios.get('https://fakestoreapi.com/products');
        return res.data;
    } catch (error) {
        return error.message;
    }
}