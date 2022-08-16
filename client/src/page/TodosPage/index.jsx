import  {useEffect, useState }from 'react';
import api from '../../api/server-api'

function TodosPage (){

const [todos, setTodos] = useState([]);

useEffect(()=>{
    const getTodos = async () =>{
        try{
            const allTodos = await api.fetchTodos();
            setTodos(allTodos)
        }catch(err){
            console.log(err)
        }
    }; getTodos()
}, [])

console.log(todos)

}

export default TodosPage