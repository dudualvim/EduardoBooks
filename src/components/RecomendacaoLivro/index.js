import styled from "styled-components";
import capaLivro from '../../img/PoderDoHabito.jpg';

const BalaoRecomendacao = styled.div`
    position: absolute;
    top: -50px;  /* Ajuste para o posicionamento vertical */
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff6b6b;
    color: white;
    padding: 8px 25px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;  /* Garantir que o balão fique acima do card */
`;

const RecomendacaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, #ffcc33, #ff9966);
    border-radius: 15px;
    padding: 20px;
    width: 250px;  
    height: 420px; 
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;  /* Necessário para posicionar o balão */

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
`;

const ImagemLivro = styled.img`
    width: 150px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const TituloLivro = styled.h3`
    color: #FFF;
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0px;
`;

const AutorLivro = styled.p`
    color: #FFF;
    font-size: 16px;
    margin-bottom: 5px;
`;

const DescricaoLivro = styled.p`
    color: #f7f7f7;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 60px; /* Limitar altura da descrição */
`;

const BotaoRecomendar = styled.button`
    background-color: #ff6b6b;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ff4747;
    }
`;

function RecomendacaoLivro() {
    return (
        <RecomendacaoContainer>
            <BalaoRecomendacao>Recomendação</BalaoRecomendacao>
            <ImagemLivro src={capaLivro} alt="Capa do livro O Poder do Hábito" />
            <TituloLivro>O Poder do Hábito</TituloLivro>
            <AutorLivro>por Charles Duhigg</AutorLivro>
            <DescricaoLivro>
                Este livro fascinante desvenda a ciência por trás da formação de hábitos, mostrando como eles
                podem ser transformados para melhorar nossa vida pessoal e profissional.
            </DescricaoLivro>
            <BotaoRecomendar>Leia Agora</BotaoRecomendar>
        </RecomendacaoContainer>
    );
}

export default RecomendacaoLivro;
