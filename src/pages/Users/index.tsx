import { BaseSyntheticEvent, useState, useCallback } from 'react'

// COMPONENTS
import { Button, Input } from '../../components'

// STYLES
import { Container } from './styles'

// UTILS
import { checkIfUserExists } from '../../utils/check-if-user-exists'

export interface IUser {
    name: string,
    email: string,
    address: string,
}

const UsersPage = ():JSX.Element => {
    const [userData, setUserData] = useState<IUser>({
        name: "",
        email: "",
        address: "",
    });
    
    const handleOnChange = useCallback(
    (e: BaseSyntheticEvent) => {
        const {
        target: { name, value },
        } = e;
        setUserData({ ...userData, [name]: value });
    },
    [userData]
    );

    const handleOnClick = useCallback(
        (e: BaseSyntheticEvent) => {
            // @ts-ignore
            let usersRegistered = JSON.parse(window.localStorage.getItem('usersData'))

            if(!!!usersRegistered) {
                window.localStorage.setItem('usersData', JSON.stringify([userData]))
                return
            }

            if(!(checkIfUserExists(usersRegistered, userData.email))) {
                usersRegistered = [...usersRegistered, userData]
                window.localStorage.setItem('usersData', JSON.stringify(usersRegistered))
            }

            setUserData({name: "", email: "", address: ""})
        },
        [userData]
    )
    
    return (
        <Container>
            <Input label={"Nome completo"} type={"text"} name={"name"} onChange={handleOnChange} value={userData.name} subLabel={"Não use dados reais, o prósito aqui é estudo."}/>

            <Input label={"E-mail"} type={"email"} name={"email"} onChange={handleOnChange} value={userData.email} subLabel={"Não use dados reais, o prósito aqui é estudo."}/>

            <Input label={"Endereço"} type={"text"} name={"address"} onChange={handleOnChange} value={userData.email} subLabel={"Não use dados reais, o prósito aqui é estudo."}/>

            <Button label={"Cadastar usuário"} onClick={handleOnClick}/>
        </Container>
    )
}

export default UsersPage