import * as React from "react"
import styled from 'styled-components'
import Planner from '../components/Planner/Planner'
import Title from '../components/Title'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Layout from '../components/Layout'
import Why from '../components/Why'
import Equipment from '../components/Equipment'

export default function indexPage() {
  return (
    <Layout>
      <Title />
      <S />
      <About />
      <S />
      <Why />
      <S />
      <Testimonials />
      <S />
      <Equipment />
      <S />
      <Planner />
      <S />
    </Layout>
  )
}

const S = styled.div`
  height: 10rem;
`