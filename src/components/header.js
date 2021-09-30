import { StyledHeader, Nav, Logo } from "./styles/Header.styled"
import {Container} from './styles/Container.styled'
import {Button} from './styles/Button.styled'

export default function Header(){
    // I can pass parameters in StyledHeader as many as I like, I don't use it here because I play with theme on top level, but it is easily doable. 
    return (
        <StyledHeader bg="red">
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg'></Logo>
                    <Button>Try It Free</Button>
                </Nav>
            </Container>
        </StyledHeader>
        )
}