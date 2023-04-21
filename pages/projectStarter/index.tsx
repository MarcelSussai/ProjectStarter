import HeadDefault from '@/components/head'
import { Main } from '@/components/ui/containers/main'
import HeadTitles from '@/components/ui/type/headTitles'
import TextDefault from '@/components/ui/type/textDefault'
import { ColumnFlex } from '@/styles/parts'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'


const links = [
  {txt: 'Colors', link: '/projectStarter/colors'},
  {txt: 'Tables', link: '/projectStarter/table'},
  {txt: 'Inputs', link: '/projectStarter/inputs'},
]

const ContainerLinks = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 8px;
  gap: 8px;
`


export default function Home() {
  return (
    <>
      <HeadDefault title='Home' />
      <Image
        priority src='/logo.svg' height={80} width={80} alt='logo ms dev'
      />
      <Main>
        <HeadTitles> {`Bem vindo ao ProjectStarter`} </HeadTitles>
        <TextDefault>
          {`Este projeto, visa melhorar a experiência de desenvolvimento, deixando tudo que é preciso para o desenvolvimento facilitado de um projeto novo e robusto,
          como por exemplo:`} <br />
        </TextDefault>
        <ul>
          <li> {`componentes pré-prontos`} </li>
          <li> {`tematização via variáveis css`} </li>
          <li> {`ferramenta para geração de tonalidades de cores transformadas em variáveis css para fácil utilização com styled components`} </li>
          <li> {`códigos úteis pra trabalhar com requisições e endpoints`} </li>
        </ul>
        <TextDefault>
          {`e uma proposta de estrutura junto com next js, styled components, Typescript, React Query, e muito mais coisas ...`} <br />
        </TextDefault>
        <ContainerLinks>
          {
            links.map((link, i) => (
              <Link
                key={i} color='main'
                href={link.link}
                target='_blank'
              >
                {link.txt}
              </Link>
            ))
          }
        </ContainerLinks>
      </Main>
    </>
  )
}
