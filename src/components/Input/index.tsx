import { Container, InputStyled, LabelStyled } from './styles'

interface IInput {
    label?: string;
    type?: string;
}

const Input = ({label, type}: IInput):JSX.Element => {
    return (
        <Container>
            <LabelStyled htmlFor={label}>{`${label}:`}</LabelStyled>
            <InputStyled id={label} type={type}/>
        </Container>
    )
}

export default Input