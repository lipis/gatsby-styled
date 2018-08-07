import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

import { HeaderMenu, Logo, MenuLink, H1 } from '@wireapp/react-ui-kit'

const Header = () => (
  <HeaderMenu logoElement={<Logo />}>
    <MenuLink to={'/download/'}>{'Download'}</MenuLink>
    <MenuLink to={'/blog/'}>{'Blog'}</MenuLink>
    <MenuLink to={'/about/'}>{'About'}</MenuLink>
  </HeaderMenu>
)

const Title = styled(H1)`
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <Header />
    <Title>Hello, World!</Title>
  </Layout>
)
export default IndexPage
