import * as P from '@/styles/parts'
import styled from 'styled-components'
import * as I from './interfaces'



export const ContainerAll = styled.section`
  ${P.TransitionDefault}
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
  ${P.TransitionDefault}
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
  ${P.TransitionDefault}
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
  ${P.TransitionDefault}
  ${P.TransitionDefault}
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  border: solid 1px;
`

export const ColorName = styled.h2`
  ${P.TransitionDefault}
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
  ${P.TransitionDefault}
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

export const WrapperCodeBlock = styled.div`
  ${P.TransitionDefault}
  ${P.ShowTransition}
  width: 100%;
  padding: 16px;
  border-radius: ${P.roundeds[2]};
  margin: 0;
  background: var(--color-grey-900);
  pre, code {
    padding: 0;
    margin: 0;
    color: var(--color-grey-025);
    font-family: var(--font-mono);
    font-size: ${P.fontSizes[2]};
  }
  .hljs-deletion { color: var(--color-red-100); }
  .hljs-addition { color: var(--color-blue-100); }
  .hljs-string { color: var(--color-orange-100); }
  .hljs-section { color: var(--color-wine-200); }
  .hljs-selector-class { color: var(--color-orange-100); }
  .hljs-selector-tag { color: var(--color-teal-100); }
  .hljs-selector-id { color: var(--color-orange-200); }
  .hljs-selector-class { color: var(--color-red-100); }
  .hljs-selector-attr { color: var(--color-paleRed-200); }
  .hljs-selector-pseudo { color: var(--color-red-100); }
  .hljs-template-variable { color: var(--color-orange-075); }
  .hljs-template-tag { color: var(--color-orange-075); }
  .hljs-params { color: var(--color-red-125);}
  .hljs-keyword { color: var(--color-green-200); }
  .hljs-function { color: var(--color-purple-200); }
  .hljs-type { color: var(--color-limeGreen-200); }
  .hljs-literal { color: var(--color-pink-200); }
  .hljs-number { color: var(--color-pink-200); }
  .hljs-operator { color: var(--color-gold-200); }
  .hljs-punctuation { color: var(--color-paleRed-200); }
  .hljs-property { color: var(--color-pink-200); }
  .hljs-subst { color: var(--color-orange-200); }
  .hljs-symbol { color: var(--color-red-200); }
  .hljs-class { color: var(--color-pink-200); }
  .hljs-variable { color: #3C90E5; }
  .hljs-title { color: #3C90E5; }
  .hljs-comment { color: #3C90E5; }
  .hljs-section { color: #3C90E5; }
  .hljs-tag { color: #3C90E5; }
  .hljs-attr { color: #3C90E5; }
  .hljs-name { color: #3C90E5; }
  .hljs-attribute { color: #3C90E5; }
`

export const WrapperNameColor = styled.div`
  ${P.TransitionDefault}
  ${P.ShowTransition}
  ${P.Size('100%')}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`