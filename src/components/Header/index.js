import Logo from '../Logo'
import IconsHeader from '../IconsHeader';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
   
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconsHeader/>
        </HeaderContainer>
    );
}

export default Header;