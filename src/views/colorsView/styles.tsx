import * as P from '@/styles/parts'
import styled from 'styled-components'
import * as I from './interfaces'



export const ContainerAll = styled.section`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
`


export const Item = styled.div.attrs( (props: I.IColorsItem) => ({
  style: {
    background: `var(${props.color})`,
    gridColumn: `${props.stretch ? '1 / -1' : 'unset'}`
  }
}))<I.IColorsItem>`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  display: flex;
  font-family: var(--font-mono);
  justify-content: center;
  border: solid 1px #000;
  font-size: clamp(${P.fontSizes[0]}, 3vw, ${P.fontSizes[3]});
  line-height: 1;
  color: #FFF;
  padding: 8px 4px;
  font-weight: 600;
  text-shadow: 0 0 4px #000,
    0 0 6px #000, 0 0 8px #000, 0 0 12px #000, 0 0 16px #000
  ;
`

export const ItemColor = styled.article`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: solid 2px #000;
  ${P.medias[25]} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ContainerColorsValues = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 16px;
  /* width: 88%; */
  width: 1092px;
  padding: 24px;
`

export const AllColorValues = styled.section`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  border: solid 1px;
`

export const ColorName = styled.h2`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  width: 100%;
  padding: 8px;
  background: var(--color-grey-025);
  grid-column: 1 / -1;
`

export const ContainerColor = styled.div.attrs((props: I.IColorsItem) => ({
  style: {
    background: `var(${props.color})`,
    gridColumn: `${props.stretch ? '1 / -1' : 'unset'}`,
    gap: `${props.stretch ? '16px' : '0'}`,
  }
}))<I.IColorsItem>`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: ${({stretch}) => stretch ? 'center' : 'space-between'};
  width: 100%;
  font-size: clamp(${P.fontSizes[0]}, 3vw, ${P.fontSizes[2]});
  font-family: var(--font-mono);
  line-height: 1;
  padding: 12px 16px;
  color: #FFF;
  font-weight: 600;
  border: solid 1px #000;
  text-shadow: 0 0 4px #000,
    0 0 6px #000, 0 0 8px #000, 0 0 12px #000, 0 0 16px #000
  ;
`


export const WrapperNameColor = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  ${P.Size('100%')}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`