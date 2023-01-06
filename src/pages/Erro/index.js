import { Link } from "react-router-dom"
import './index.css'
function Erro(){
    return (
        <div className="not-found">
        <h1>404</h1>
        <h3>
            Op's, parece que essa página não existe.
        </h3>

        <Link to={'/'}>Veja nossos filmes</Link>
        </div>
        
    )
}

export default Erro