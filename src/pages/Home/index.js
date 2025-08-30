import { useState, useEffect } from 'react';
import '../../Style.css';
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './style.css'

function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState([true])

  useEffect(()=>{
    async function loadApi(){
        const response = await api.get("movie/now_playing",{
          params:{
            api_key: 'dc65bd6cd0350c6459501785623cceaa',
            language:'pt-BR',
            page: 1
          }
        })
        setFilmes(response.data.results.slice(0,10))
        setLoading(false)
    }
    loadApi();
  },[]);

  if (loading){
    return(
      <div className="loading">
          <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((item) =>{
          return (
            <article key={item.id} className="post">
              <strong className="titulo">{item.title}</strong>
              <img className="capa" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
              <Link to={`/filme/${item.id}`} className="botao">Acessar</Link>
              <p className="subtitulo">
                {item.subtitulo}
              </p>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
