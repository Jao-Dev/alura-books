import { livros } from "../Pesquisa/dadosPesquisa";
import styled from "styled-components";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from "../../imagens/livro2.png";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo color={"#EB9B00"} font-size={"36px"}>ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src="{livro.src}" alt="" />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo={"Talvez você see interesse por"}
                subtitulo={"Angular 11"}
                descricao={"Construindo uma aplicação com a plataforma Google."}
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;