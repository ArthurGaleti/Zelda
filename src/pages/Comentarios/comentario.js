import Header from '../../Itens/nav/nav'
import Rodape from '../../Itens/rodape/rodape'
import meta from '../../assets/metac.png'
import nota from '../../assets/notadog.png'
import { Aval, DIV, Margem } from './style'

function Comentarios(){
    return(
        <>
            <Header />

            <div className='fundoC'>
                <h1>Aqui você poderá encontrar algumas avalialões dos nossos produtos</h1>

                <DIV>
                    <a href="https://www.metacritic.com/game/switch/the-legend-of-zelda-tears-of-the-kingdom" target='_blank'><Aval src={meta}/></a>
                    <a href="https://notadogame.com/the-legend-of-zelda-tears-of-the-kingdom" class="semfundo" target='_blank'><Aval src={nota}/></a>
                </DIV>

                <br/>
            </div>

            

            <Rodape />
        </>
    )
}

export default Comentarios