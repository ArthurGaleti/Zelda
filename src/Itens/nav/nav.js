import { Header, Item, Lista, LogoImg, Nave } from "./style"
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

function Navegacao(){
    return(
        <Header>
            <LogoImg src={logo}/>

            <Nave>
                <Lista>
                    <Link to='/' className="lista"><Item className="lista">Home</Item></Link>
                    <Link to='/contato' className="lista"><Item>Contato</Item></Link>
                    <Link to='/jogos' className="lista"><Item>Jogo</Item></Link>
                    <Link to='/comentarios' className="lista"><Item>comentários</Item></Link>

                    
                </Lista>
            </Nave>
            
        </Header>
    )
}

export default Navegacao