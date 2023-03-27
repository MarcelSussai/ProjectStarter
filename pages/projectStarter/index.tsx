import HeadDefault from '@/components/head'
import { Main } from '@/components/ui/containers/main'
import { StyLink } from '@/components/ui/links/linkDefault'
import { HeadTitleDefault } from '@/components/ui/type/headTitles'
import { TextDefault } from '@/components/ui/type/textDefault'
import { ColumnFlex } from '@/styles/parts'
import styled from 'styled-components'


const links = [
  {txt: 'Colors', link: './colors'}
]

const ContainerLinks = styled.nav`
  ${ColumnFlex}
  padding: 8px;
  gap: 4px;
`


export default function Home() {
  return (
    <>
      <HeadDefault title='Home' />
      <Main>
        <HeadTitleDefault> {`Bem vindo ao ProjectStarter`} </HeadTitleDefault>
        <TextDefault>
          {`Este projeto, visa melhorar a experiência de desenvolvimento, deixando tudo que é preciso para o desenvolvimento facilitado de um projeto novo e robusto, como componentes pré-prontos, tematização via variáveis css, ferramenta para geração de escalas de cores úteis do tema transformadas em variáveis css para fácil utilização com styled components, códigos úteis pra trabalhar com requisições e endpoints, e uma proposta de estrutura junto com next js, styled components, Typescript, React Query, e muito mais coisas ...`}
        </TextDefault>
        <ContainerLinks>
          {
            links.map((link, i) => (
              <StyLink
                key={i} color='main'
                href={link.link}
                target='_blank'
              >
                {link.txt}
              </StyLink>
            ))
          }
        </ContainerLinks>
      </Main>
    </>
  )
}
