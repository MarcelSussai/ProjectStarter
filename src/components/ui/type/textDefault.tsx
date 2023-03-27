import { CenterFlex, TransitionDefault, fontSizes } from '@/styles/parts'
import styled from 'styled-components'

export const TextDefault = styled.p`
  /* ${ CenterFlex } */
  ${ TransitionDefault }
  flex-wrap: wrap;
  width: 100%;
  font-size: ${fontSizes[4]};
  font-weight: 500;
  line-height: 1.6;
  padding: 16px;
  color: ${({color}) => color ?
    `var(--color-${color}-800)` :
    'var(--color-default-800)'
  };
`

export const BoldTextDefault = styled.span`
  font-weight: 700;
`