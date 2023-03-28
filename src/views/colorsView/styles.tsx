import { CenterFlex, ColumnFlex, GridAutoFit, TransitionDefault, fontSizes, medias } from '@/styles/parts'
import styled from 'styled-components'
import * as I from './interfaces'



export const ContainerAll = styled.section`
  ${CenterFlex}
  ${TransitionDefault}
  flex-wrap: wrap;
`

export const All = styled.section`
  ${TransitionDefault}
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  gap: 8px;
  padding: 4px;
  ${medias[16]} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${medias[32]} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Item = styled.div.attrs( (props: I.IColorsItem) => ({
  style: {
    background: `var(${props.color})`,
    gridColumn: `${props.stretch ? '1 / -1' : 'unset'}`
  }
}))<I.IColorsItem>`
  ${TransitionDefault}
  display: flex;
  font-family: var(--font-ibm-mono);
  justify-content: center;
  border: solid 1px #000;
  font-size: clamp(${fontSizes[0]}, 3vw, ${fontSizes[2]});
  line-height: 1;
  color: #FFF;
  padding: 8px 4px;
  font-weight: 600;
  text-shadow: 0 0 4px #000,
    0 0 6px #000, 0 0 8px #000, 0 0 12px #000, 0 0 16px #000
  ;
`

export const ItemColor = styled.article`
  ${TransitionDefault}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: solid 1px #000;
  ${medias[25]} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ContainerColorsValues = styled.section`
  ${TransitionDefault}
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
  width: 100%;
`

export const AllColorValues = styled.section`
  ${TransitionDefault}
  ${CenterFlex}
  flex-direction: column;
  max-width: 200px;
  border: solid 1px;
`
export const ColorName = styled.section`
  ${TransitionDefault}
  ${CenterFlex}
  width: 100%;
  padding: 8px;
`

export const ContainerColor = styled.div.attrs(props => ({
  style: { background: `var(${props.color})` }
}))<I.IColorsItem>`
  ${TransitionDefault}
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  font-size: clamp(${fontSizes[0]}, 3vw, ${fontSizes[2]});
  font-family: var(--font-ibm-mono);
  line-height: 1;
  color: #FFF;
  padding: 12px 16px;
  font-weight: 600;
  text-shadow: 0 0 4px #000,
    0 0 6px #000, 0 0 8px #000, 0 0 12px #000, 0 0 16px #000
  ;
`