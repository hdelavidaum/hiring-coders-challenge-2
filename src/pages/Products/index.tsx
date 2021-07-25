import {Input} from '../../components'

import { Container } from './styles'

const ProductsPage = ():JSX.Element => {
    return (
        <Container>
            <Input label={"Etiqueta de teste"} type="text" />
        </Container>
    )
}

export default ProductsPage