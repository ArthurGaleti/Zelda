import Header from '../../Itens/nav/nav'
import Rodape from '../../Itens/rodape/rodape'
import {Div, Jogo, Prod } from './style'
import combo  from '../../assets/combo.png'
import totk from '../../assets/totk.jpg'
import botw from '../../assets/botw.jpg'
import { Botao } from '../../Itens/botao/botao';
function Game(){
    return(
        <>
            <Header />
                <div className='fundo2'>
                    <Div>

                        <img className='banner' src={combo}/>
                        
                        <br/><br/><br/><br/>

                        <Jogo>
                            <h2> The Legend of zelda: Tears of the Kingdom</h2>
                            <Prod src={totk}/>
                            <Botao className='button'><a href="https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/" target="_blank">Adquira original!</a></Botao>
                        </Jogo>

                        <br/><br/>

                        <Jogo>
                            <h2 class="semfundo divulg">The Legend of zelda: breath of the Wild</h2>
                            <Prod src={botw}/>
                            <Botao className='button'><a href="https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-breath-of-the-wild-switch/" target="_blank">Adquira original!</a></Botao>
                        </Jogo>

                        <br/><br/><br/><br/>
                    </Div>
                </div>

            <Rodape />
        </>
    )
}

export default Game