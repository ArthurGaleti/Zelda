import logo from '../../assets/logo.png'
import { Footer, LogoImg, Span } from './style'

function Rodape(){
    return(
        <Footer>
            <LogoImg src={logo} />
            <Span>Todos od direitos reservados ©</Span>
            <Span>Desenvolvido por: Arthur Galeti</Span>
        </Footer>
    )
}

export default Rodape;