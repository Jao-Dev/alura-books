
import styled from "styled-components";
import Pesquisa from "../componentes/Pesquisa";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589); 

  li{
    list-style: none;
  }
`


function Favoritos() {
  return (
    <AppContainer>
        <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
