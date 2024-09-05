import perfil from '../../img/perfil.png'
import sacola from '../../img/sacola.png'
import styled from 'styled-components'

const icons = [sacola, perfil]

const Icone = styled.li`
    img{
        width: 50px;  
        height: 50px; 
        padding: 0 18px;
        cursor: pointer;
    }
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
`


function IconsHeader(){
    return(
        <Icones>
            {icons.map( (icon) => (
                <Icone><img src={icon}></img></Icone>
            ) )}
        </Icones>
    );
}

export default IconsHeader;