import {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const[value, setValue] = useState("");
    const[category, setCategory] =  useState("");

    const handleSubmit = (e) => {
        e.preventDefalt();
        if(!value || !category) return;
           addTodo(value, category) ;
        setValue("");
        setCategory("");
        
    };
  return (
    <div className='todo-form'>
        <h2>Criar tarefa</h2>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder='Digite o titulo' onChange={(e)=> setValue(e.target.value)}  value={value}/>
            <select value={category} onChange={(e)=> setCategory(e.target.value)}> 
                <option value=""> Selecione uma categoria</option>
                <option value="Trabalho"> trabalho</option>
                <option value="Pessoal"> pessoal</option>
                <option value="Estudos"> estudos</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm