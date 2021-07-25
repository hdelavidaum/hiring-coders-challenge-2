import { Link } from 'react-router-dom'


// STYLES
import {Container, LinkWrapper} from './styles'

const NavMenu = ():JSX.Element => {
    return (
        <Container>
            <LinkWrapper>
                <Link to="/">Início</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/products">Cadastrar Produtos</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/users">Cadastrar Usuários</Link>
            </LinkWrapper>
        </Container>
    )
}

export default NavMenu