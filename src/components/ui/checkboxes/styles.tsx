import styled from 'styled-components'
import * as I from './interfaces'
import * as P from '@/styles/parts'


export const All = styled.label<I.IAll>`
  --size: 18px;
  ${({color}) => P.doCssColor(color,  '025', 'c1', '-5')}
  ${({color}) => P.doCssColor(color,  '025', 'c1', '-10')}
  ${({color}) => P.doCssColor(color,  '025', 'c1')}
  ${({color}) => P.doCssColor(color,  '050', 'c1')}
  ${({color}) => P.doCssColor(color,  '075', 'c1')}
  ${({color}) => P.doCssColor(color,  '100', 'c1')}
  ${({color}) => P.doCssColor(color,  '125', 'c1')}
  ${({color}) => P.doCssColor(color,  '150', 'c1')}
  ${({color}) => P.doCssColor(color,  '275', 'c1')}
  ${({color}) => P.doCssColor(color,  '400', 'c1')}
  ${({color}) => P.doCssColor(color,  '500', 'c1')}
  ${({color}) => P.doCssColor(color,  '650', 'c1')}
  ${({color}) => P.doCssColor(color,  '725', 'c1')}
  ${({color}) => P.doCssColor(color,  '775', 'c1')}
  ${({color}) => P.doCssColor(color,  '800', 'c1')}
  ${({color}) => P.doCssColor(color,  '825', 'c1')}
  ${({color}) => P.doCssColor(color,  '925', 'c1')}
  ${({color}) => P.doCssColor(color,  '975', 'c1', '-2')}
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: ${ ({horizontalAlignment}) => horizontalAlignment };
  gap: 6px;
  user-select: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1;
  background: ${
    ({noBg, checked}) => noBg ? 'transparent' :
    checked ? 'var(--c1-025-10)' : 'var(--c1-025-10)'
  };
  width: ${ ({fit}) => fit ? 'fit-content' : '100%' };
  height: ${ ({fit}) => fit ? 'fit-content' : '100%' };
  border-bottom: solid 1px ${
    ({checked, noBg}) => !noBg && checked ? 'var(--c1-275)' : 'transparent'
  };
  border-top: solid 1px ${
    ({checked, noBg}) => !noBg && checked ? 'var(--c1-275)' : 'transparent'
  };
  ${({noBg}) => !noBg && 'box-shadow: 0px 0px 8px 4px var(--c1-975-2);'}
  
  &:hover {
    border-bottom: solid 1px ${({noBg}) => !noBg ? 'var(--c1-275)' : 'transparent'};
    border-top: solid 1px ${({noBg}) => !noBg ? 'var(--c1-275)' : 'transparent'};
    background: var(--c1-125);
  }
`


export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: none;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`

export const StyledCheckbox = styled.div<I.IStyledCheckbox>`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  ${ P.CenterFlex }
  width: var(--size);
  height: var(--size);
  border-radius: ${P.roundeds[1]};
  background: ${ ({checked}) => checked ? 'var(--c1-825)' : 'var(--c1-025)' };
  color: ${ ({checked}) => !checked ? 'var(--c1-275)' : 'var(--c1-025)' };
  font-size: ${P.fontSizes[0]};
  font-weight: 900;
  line-height: 1;
  border: solid 1px ${({checked}) => !checked ? 'var(--c1-275)' : 'var(--c1-825)'};
`


export const WrapperCheckbox = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.span<I.IText>`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  font-size: ${P.fontSizes[2]};
  line-height: 1.3;
  font-weight: 500;
  color: ${ ({checked}) => !checked ? 'var(--c1-725)' : 'var(--c1-925)' };
  padding: 0 6px 0 0;
`