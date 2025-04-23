
import styled from "styled-components";
import {Link} from "react-router-dom";

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ["CATEGORIAS", "ESTANTE", "FAVORITOS"];

function OpcoesHeader(){
    return(
        <Opcoes>
            {textoOpcoes.map ((texto, index) => (<Link to={`/${texto.toLowerCase()}`} key={index}><Opcao><p>{texto}</p></Opcao></Link>))}
        </Opcoes>
    )
}

export default OpcoesHeader;