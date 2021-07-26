import {IProduct} from '../pages/Products'

export const checkIfProductExists = (products: IProduct[] | null, item: string): boolean => {
    if (products === null) return false
    return products.some(product => product.name === item)
}