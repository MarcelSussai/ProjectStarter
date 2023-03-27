import { CenterFlex, TransitionDefault } from '@/styles/parts'
import styled from 'styled-components'
import Link from 'next/link'

interface ILink {
  color?: string
}
export const StyLink = styled(Link)<ILink>`
  ${CenterFlex}
  ${TransitionDefault}
  padding: 4px 8px;
  background: ${({color}) => color ?
    `var(--color-${color}-025)` :
    'var(--color-default-025)'
  };
  color: ${({color}) => color ?
    `var(--color-${color}-800)` :
    'var(--color-default-800)'
  };
  font-size: 1.8rem;
  line-height: 1;
  border-bottom: solid 1px ${({color}) => color ?
    `var(--color-${color}-800)` :
    'var(--color-default-800)'
  };
  font-weight: 900;
  width: fit-content;
  border-radius: 16px 16px 0 16px;
  &:hover {
    background: ${({color}) => color ?
      `var(--color-${color}-100)` :
      'var(--color-default-100)'
    };
  }
`