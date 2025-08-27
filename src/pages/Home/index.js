import { useState, useEffect } from 'react';
import '../../Style.css';

function Home() {
  const [nutri, setNutri] = useState([])

  useEffect(()=>{
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url).then((r)=> r.json()).then((json)=>{
        setNutri(json)
      })
    }

    loadApi();
  },[]);

  return (
    <div className="container">
      {nutri.map((item) =>{
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img className="capa" src={item.capa} alt={item.titulo}/>
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}

    </div>
  );
}

export default Home;
