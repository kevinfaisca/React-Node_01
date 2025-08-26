import { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Estudar React'
  ]);


  useEffect(() =>{
    const tarefasStorage = localStorage.getItem('@tarefa')
    if(tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));

  },[tarefas]);

  function registro(e){
    e.preventDefault();

    setTarefas([...tarefas, input])
    setInput('');
  }

  return (
    <div>
      <form onSubmit={registro}>
        <label>Nome da tarefa:</label><br/>
        <input placeholder='Digite uma tarefa' value={input} onChange={(e) =>{setInput(e.target.value)}} /><br/>
        <button type="submit">Salvar</button>
      </form>
      <br/><br/>
      <ul>
        {tarefas.map( tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
