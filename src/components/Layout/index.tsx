import { NavMenu } from '../'
import {LayoutContainer } from './styles'

const Layout = ({children}: {children: JSX.Element}):JSX.Element => {

    return (
        <LayoutContainer>
            <NavMenu />
            {children}
        </LayoutContainer>
    )
}

export default Layout;