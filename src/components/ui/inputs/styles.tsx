import styled from 'styled-components'
import * as P from '@/styles/parts'
import * as I from './interfaces'

export const InputDefault = styled.input<I.IInputDefault>`
  ${({color = 'main'}) => P.doCssColor(`${color}`, '025', 'c1')}
  ${({color = 'main'}) => P.doCssColor(`${color}`, '300', 'c1')}
  ${({color = 'main'}) => P.doCssColor(`${color}`, '700', 'c1')}
  ${({color = 'main'}) => P.doCssColor(`${color}`, '800', 'c1')}
  ${({color = 'main'}) => P.doCssColor(`${color}`, '600', 'c1', '-5')}
  ${({color = 'main'}) => P.doCssColor(`${color}`, '600', 'c1', '-2')}
  ${P.ShowTransition}
  ${P.TransitionFn({})}
  ${P.CenterFlex}
  ${ P.TextClamp({start: 2, mid: '1.6vw', end: 3}) }
  border-radius: ${P.roundeds[16]};
  width: 100%;
  padding: 6px 12px;
  font-weight: 700;
  color: var(--c1-700);
  background: var(--c1-025);
  border: solid 2px var(--c1-300);
  box-shadow: inset 0px 0px 6px var(--c1-600-2);
  ${({maxW}) => maxW ? `max-width: ${maxW};` : ''}


  &:focus {
    border: solid 2px var(--c1-700);
    box-shadow: inset 0px 0px 6px var(--c1-600-5);
  }
`

export const InputCell = styled(InputDefault)`
  border-radius: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  &:focus {
    border-top: none;
    border-left: none;
    border-right: none;
  }
`