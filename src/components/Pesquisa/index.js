import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background: linear-gradient(90deg, rgba(117,117,117,1) 0%, rgba(94,94,94,1) 6%, rgba(40,40,40,1) 88%);
    color: #FFF;
    text-align: center;
    padding: 200px 0;
    width: 100%;
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 42px;
    text-align: center;
    width: 100%;
`;

const SubTitulo = styled.h3`
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const LivrosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    padding: 60px;
`;

const CardLivro = styled.div`
    background: linear-gradient(90deg, rgba(117,117,117,1) 0%, rgba(94,94,94,1) 86%, rgba(40,40,40,1) 100%);
    color: #FFF;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 250px;
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        background-color: #f0f0f0;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    img {
        max-width: 100%;
        border-radius: 10px;
    }

    p {
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
    }
`;

function Pesquisa (){
    const [livrosPesquisados, setLivrosPesquisado] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
                    setLivrosPesquisado(resultadoPesquisa);
                }}
            />
            <LivrosContainer>
                {livrosPesquisados.map(livro => (
                    <CardLivro key={livro.nome}>
                        <img src={livro.src} alt={`Capa do livro ${livro.nome}`} />
                        <p>{livro.nome}</p>
                    </CardLivro>
                ))}
            </LivrosContainer>
        </PesquisaContainer>
    );
}

export default Pesquisa;
