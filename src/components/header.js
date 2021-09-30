import { StyledHeader } from "./styles/Header.styled"

export default function Header(){
    // I can pass parameters in StyledHeader as many as I like, I don't use it here because I play with theme on top level, but it is easily doable. 
    return (
        <StyledHeader bg="red">
            <h1>Hubble</h1>
        </StyledHeader>
        )
}