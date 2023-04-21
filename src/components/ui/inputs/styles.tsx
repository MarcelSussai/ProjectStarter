import styled from 'styled-components'
import * as P from '@/styles/parts'
import * as I from './interfaces'

export const InputDefault = styled.input<I.IInputDefault>`
  ${({color = 'default'}) => P.doCssColor(`${color}`, '025', 'c1')}
  ${({color = 'default'}) => P.doCssColor(`${color}`, '300', 'c1')}
  ${({color = 'default'}) => P.doCssColor(`${color}`, '700', 'c1')}
  ${({color = 'default'}) => P.doCssColor(`${color}`, '750', 'c1')}
  ${({color = 'default'}) => P.doCssColor(`${color}`, '800', 'c1')}
  ${({color = 'default'}) => P.doCssColor(`${color}`, '975', 'c1', '-3')}
  ${P.ShowTransition}
  ${P.TransitionFn({})}
  ${P.CenterFlex}
  ${ P.TextClamp({start: 2, mid: '1.6vw', end: 3}) }
  border-radius: ${P.roundeds[16]};
  width: 100%;
  padding: 6px 12px;
  font-weight: 700;
  color: var(--c1-750);
  background: var(--c1-025);
  border: solid 2px var(--c1-300);
  /* box-shadow:
    0px 0px 8px 2px var(--c1-975-3)
  ; */
  ${({maxW}) => maxW ? `max-width: ${maxW};` : ''}


  &:focus {
    border: solid 2px var(--c1-700);
  }
`