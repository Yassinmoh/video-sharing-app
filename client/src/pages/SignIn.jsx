import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 3.5rem);
    color: ${({ theme }) => theme.text};
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`
const Title = styled.h1`
    font-style: 24px;
`
const SubTitle = styled.h2`
    font-style: 20px;
    font-weight: 300;
`
const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
    color: ${({ theme }) => theme.text};
`
const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textSoft};
`
const More = styled.div`
    display: flex;
    margin-top: 1.3rem;
    font-style: 12px;
    color:${({ theme }) => theme.textSoft};
`
const Links = styled.div`
    margin-left: 50px;
`
const Link = styled.span`
    margin-left: 1.2rem;
`



const SignIn = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            const res = await axios.post("/auth/signin", { name, password });
            dispatch(loginSuccess(res.data));
        } catch (err) {
            dispatch(loginFailure());
        }
    };
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <SubTitle>to continue to Yassin Tube </SubTitle>
                <Input placeholder='username' onChange={(e) => setName(e.target.value)} />
                <Input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleLogin}>Sign In</Button>
                <Title>Or</Title>
                <Input placeholder='username' onChange={(e) => setName(e.target.value)} />
                <Input placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <Button>Sign Up</Button>
            </Wrapper>
            <More>
                English(USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privcy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}

export default SignIn