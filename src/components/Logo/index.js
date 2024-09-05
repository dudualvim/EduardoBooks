import styled from 'styled-components';
import logo from '../../img/books1.png'

const LogoContainer = styled.div`
  display: flex;
  padding: 8px;
`

function Logo() {
    return (
        <LogoContainer>
          <img src={logo} alt='logo'></img>
        </LogoContainer>
    )
}

export default Logo;