import styled from "styled-components";

export const Titulo = styled.h2`
    text-align: center;
    color: ${props => props.cor || '#000'};
    padding: 15px;
    font-size: 36px;
    
`

export const Container = styled.div`
    text-align: center;
    background: #d3d3d3;
    background: ${props => props.cor || 'linear-gradient(90deg, rgba(117,117,117,1) 0%, rgba(94,94,94,1) 6%, rgba(40,40,40,1) 88%)'}
`