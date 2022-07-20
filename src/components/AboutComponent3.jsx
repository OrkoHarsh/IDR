import React from 'react'
import styled from 'styled-components'
import { userData } from '../AboutData'
import AbtComponent from './AbtComponent'
const Container =styled.div`
background-color:#1E1E1E;
display:flex;
flex-direction:column;
// justify-content:center;
// align-items:center;
`

const Title =styled.h1`
font-weight: 400;
font-size: 57.2598px;
line-height: 150%;
display:flex;
align-items:center;
justify-content:center;
color:#FFFFFF;
margin-bottom:30px;
margin-top:60px;
`
const Wrapper =styled.div`
// display:flex;
// flex-direction:column;

`





const AboutComponent3 = () => {
  return (
    <Container>
      <Title>
        About the Directors of IDR
      </Title>

      <Wrapper>
      {userData.map((item) =>(
        <AbtComponent item={item} key = {item.id} />

      ))}
      </Wrapper>

    </Container>
  )
}

export default AboutComponent3
