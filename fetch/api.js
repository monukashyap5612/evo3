import axios from 'axios';
export const fetchTodes = async () => {
    const res = await axios.get('https://dummyjson.com/todos');
    return res.data.todas;
}