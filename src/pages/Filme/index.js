import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from '../../services/api'
import './filme-info.css'
function Filme() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [filme, setFilme] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '7c61b3e96f7cd741cd6476fbe743dba9',
                    language: 'pt-BR',
                }
            }).then((resp) => {
                setFilme(resp.data)
                setloading(false)
            }).catch(() => {
                console.log('FILME NÃO ENCONTRADO')
                navigate('/', { replace: true})
            })
        }
        loadFilme()
        return()=>{
            console.log('COMPONENTE FOI DESMONTADO')
        }
    }, [navigate, id])

    function handleSave(){
        const minhaLista = localStorage.getItem('@primeflix')

        let filmesSalvos = JSON.parse(minhaLista) || []

        const temFilme = filmesSalvos.some((filmesSalvos)=>filmesSalvos.id === filme.id)

        if(temFilme){
            alert('filme já na lista')
            return
        }

        filmesSalvos.push(filme);
        localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
        alert('filme salvo com sucesso')
    }

    if(loading){
        return (
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title}></img>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>
        
            <div className="area-buttons">
                <button onClick={handleSave}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_querys=${filme.title} Trailer`} target="blank" rel="noreferrer">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}


export default Filme