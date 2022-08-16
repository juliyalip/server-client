const BASE_URL = 'http://localhost:3000'

const fetchTodos = ()=>{
    return fetch(`${BASE_URL}/todos`)
};

const api = {
    fetchTodos
}

export default api ;