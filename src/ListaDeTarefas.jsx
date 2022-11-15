import {useState} from 'react'
import {Item, Container, Todolist, Input, Button, List, CheckBox} from './styles'

function ListaDeTarefas(){

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');


  function inputChange(event){
    setInputValue(event.target.value); 
  }

  function btnAdd(){
    setTasks([... tasks, inputValue]) /// ... tasks significar pegar todas as tarefas que já existem e adicionar o input value
  }

  function btnDel(){
    tasks.pop()
    setTasks([... tasks])
  }

  return(
   <Container>
    <Todolist>
      <Input placeholder="Digite a sua tarefa..." onChange={inputChange}/>
      <Button onClick={btnAdd}> Adicionar Tarefa</Button>
      <Button onClick={btnDel}> Apagar última tarefa</Button>
      <List>
        {
          tasks.map(function(item, index){
            return <Item key={index}><CheckBox type="checkbox"/> {item}</Item>
          })
        }
      </List>
      </Todolist>
   </Container>
  )
}

export default ListaDeTarefas