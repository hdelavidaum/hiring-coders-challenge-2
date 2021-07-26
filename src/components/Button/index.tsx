// STYLES
import {Container, ButtonStyled} from './styles'

interface IButton {
    label?: string
    onClick?: any
}

const Button = ({ label, onClick}: IButton): JSX.Element => {
    return (
        <Container>
            <ButtonStyled onClick={onClick}>
                {label}
            </ButtonStyled>
        </Container>
    )
}

export default Button