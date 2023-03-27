import { CenterFlex, TransitionDefault, fontSizes } from '@/styles/parts'
import styled from 'styled-components'

interface IHeadTitle { color?: string }
export const HeadTitleDefault = styled.h1<IHeadTitle>`
  ${ CenterFlex }
  ${ TransitionDefault }
  width: 100%;
  font-size: ${fontSizes[8]};
  font-weight: 900;
  padding: 8px;
  color: ${({color}) => color ?
    `var(--color-${color}-800)` :
    'var(--color-default-800)'
  };
`