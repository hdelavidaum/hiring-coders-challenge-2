import { Container, InputStyled, LabelStyled, SubLabel } from './styles'

interface IInput {
    label?: string;
    type?: string;
    name?: string;
    onChange?: any;
    value?: string | number;
    subLabel?: string;
}

const Input = ({label, subLabel, type, name, onChange, value}: IInput):JSX.Element => {
    return (
        <Container>
            <LabelStyled htmlFor={label}>{`${label}:`}</LabelStyled>
            {!!subLabel && <SubLabel>{subLabel}</SubLabel>}
            <InputStyled id={label} type={type} name={name} onChange={onChange} value={value}/>
        </Container>
    )
}

export default Input