import '../style/geral.css'
import Navegacao from '../../Itens/nav/nav';
import { Banner, Card, CardCo, CardP, CardPe, Conteudo, Descricao, Sinopse, Trailer, TrailerC } from './style';
import video from '../../assets/TLoZTearsOfTheKingdomTrailer.mp4'
import { Botao } from '../../Itens/botao/botao';
import Rodape from '../../Itens/rodape/rodape';



function Home(){
    return(
        <>
            <Navegacao />
               
            <div>
                <div>
                    <img className='banner' src='https://www.tomsguide.fr/content/uploads/sites/2/2023/05/tears-of-the-kingdom.jpg'/>
                </div>

                <TrailerC>
                    <Conteudo>
                        <Trailer controls>
                            <source src={video} type="video/mp4" />
                            O seu navegador nao suporta o video
                        </Trailer>

                        <Sinopse>
                        <Descricao>
                            você decidirá seu próprio caminho pelas extensas paisagens de Hyrule e pelas misteriosas 
                            ilhas flutuantes nos vastos céus. Será que você conseguirá aproveitar o poder das novas 
                            habilidades de Link para lutar contra as forças malévolas que ameaçam o reino?
                        </Descricao>
                        <Botao className='button'><a href='/jogos'>Adquira já</a></Botao>  
                    </Sinopse>
                    </Conteudo>
                </TrailerC>


                <CardPe>
                    <CardCo>
                        <Card className='card banner-1'><CardP>Link</CardP></Card>
                        <Card className='card banner-2'><CardP>Zelda</CardP></Card>
                        <Card className='card banner-3'><CardP>Ganondorf</CardP></Card>
                    </CardCo>
                </CardPe>

            </div>
        

            <Rodape />
        </>
        
    );
}

export default Home