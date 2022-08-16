import  {useEffect, useState }from 'react';
import Container from '../../components/Container';
import TodoForm from '../../components/TodoForm';
import TodoItem from '../../components/TodoItem';
import api from '../../api/server-api'

function TodosPage (){

const [todos, setTodos] = useState([]);

useEffect(()=>{
    const getTodos = async () =>{
        try{
            const response = await api.fetchTodos();
           const allTodos = await response.json()
           setTodos(allTodos.data)
        }catch(err){
            console.log(err)
        }
    }; getTodos()
}, [])

console.log(todos);

return(
    <Container width="600px">
        <TodoForm  />
   <ul >
    {todos.length > 0 && todos.map(todo => (
<TodoItem  key={todo.id} {...todo}/>
    ))}
   </ul>
   </Container>
)

}

export default TodosPage