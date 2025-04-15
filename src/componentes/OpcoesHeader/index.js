
import styled from "styled-components";

const Opcoes = styled.ul`
    dispaly: flex;
`

const textoOpcoes = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

function OpcoesHeader(){
    return(
        <Opcoes>
            {textoOpcoes.map ((texto) => (<li className="opcao"><p>{texto}</p></li>))}
        </Opcoes>
    )
}

export default OpcoesHeader;