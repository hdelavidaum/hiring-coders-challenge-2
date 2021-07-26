import { BaseSyntheticEvent ,useState, useCallback } from 'react'

// COMPONENTS
import { Button, Input } from '../../components'

// STYLES
import { Container } from './styles'

// UTILS
import { checkIfProductExists } from '../../utils/check-if-product-exists'

export interface IProduct {
    name: string,
    price: number | string,
    quantity: number | undefined,
}

const ProductsPage = ():JSX.Element => {
    const [ product, setProduct ] = useState<IProduct>({
        name: '',
        price: '',
        quantity: undefined,
    })

    
    const handleOnChange = useCallback(
        (e:BaseSyntheticEvent) => {
            const { target: { name, value}} = e

            if (name === "price") {
                setProduct({...product, [name]: value})
                return
            }

            setProduct({...product, [name]: value})
        },
        [product]
    )

    const handleOnClick = useCallback(
        (e: BaseSyntheticEvent) => {
            //@ts-ignore
            let productsRegistered = JSON.parse(window.localStorage.getItem('productsData'))

            if (!!!productsRegistered) {
                window.localStorage.setItem('productsData', JSON.stringify([product]))
                return
            }

            if (checkIfProductExists(productsRegistered, product.name)) {

                const productAlreadyRegistered = productsRegistered.filter((item: IProduct) => item.name === product.name)[0]

                //@ts-ignore
                const setNewQuantity = parseInt(productAlreadyRegistered.quantity) + parseInt(product.quantity)
                productAlreadyRegistered['quantity'] = setNewQuantity;

                productsRegistered.map((item: IProduct) => {
                    if (item.name === productAlreadyRegistered.name) {
                        item = productAlreadyRegistered
                        return item
                    }
                    return item
                })

                window.localStorage.setItem('productsData', JSON.stringify(productsRegistered))
                return
            }

            productsRegistered = {...productsRegistered, ...product}
            window.localStorage.setItem('productsData', JSON.stringify(productsRegistered))
        },
        [product]
    )

    return (
        <Container>
            <Input label={"Nome do produto"} type="text" name={"name"} onChange={handleOnChange} value={product.name}/>
            <Input label={"Preço individual"} type="money" name={"price"} onChange={handleOnChange} value={product.price}/>
            <Input label={"Quantidade em Estoque"} type="number" name={"quantity"} onChange={handleOnChange} value={product.quantity} subLabel={'Para atualizar a quantidade, basta inserir quantos mais itens serão inseridos ao total.'}/>

            <Button label={"Cadastar produto"} onClick={handleOnClick}/>
        </Container>
    )
}

export default ProductsPage