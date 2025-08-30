import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Header from './components/Header'
import Erro from './pages/Erro'
import Filme from './pages/Filme'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route  path='/favoritos' element={<Favoritos/>}/>
                <Route  path='/filme/:id' element={<Filme/>}/>

                <Route path="*" element={<Erro/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp