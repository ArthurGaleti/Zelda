import Header from '../../Itens/nav/nav'
import Rodape from '../../Itens/rodape/rodape'
import { Cont, Label, Input } from './style'
import { Botao } from '../../Itens/botao/botao';

function Contato(){
    return(
        <>
            <Header />

            <div className='fundoC'>
                <h1>Entre em contato Conosco</h1>

                <div className='sf'> 
                    <Label for="nome"> Nome</Label>
                    <Input type="text" id="nome" class="fundob" placeholder="Informe seu nome." required />
                            <br/>
                    <Label for="email"> E-mail</Label>
                    <Input type="email" id="email" class="fundob" placeholder="Informe seu email." required />
                </div>

                <br/><br/>

                <div className='sf'> 
                    <h2>Seu problema é com relação à:</h2>

                    <Input type='checkbox' id="p1" />
                    <Label for="p1" class="textb">O site não responde corretamente</Label> <br/>

                    <Input type='checkbox' id="p2" />
                    <Label for="p1" class="textb">Alguma desinformação encontrada</Label> <br/>

                    <Input type='checkbox' id="p3" />
                    <Label for="p1" class="textb">Meu produto não está/veio como o proposto</Label> <br/>

                    <Input type='checkbox' id="p4" />
                    <Label for="p1" class="textb">Outros (Informe no Comentários)</Label> <br/>
                </div>

                <h2>Comentário:</h2>
                <textarea name="coment" id="coment"  cols="70" rows="10" placeholder="Informe-nos de forma mais detalhada sobre seu Problema"></textarea>
                <Botao className='button'>Enviar</Botao>

                <br/>


            </div>

            <Rodape />
        </>
    )
}

export default Contato