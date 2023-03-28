import { ColumnFlex, fontSizes } from '@/styles/parts'
import styled from 'styled-components'

export const Main = styled.main`
  ${ColumnFlex}
`

export const MainGradient = styled.main`
  ${ColumnFlex}
  color: var(--color-limeGreen-500);
  font-family: var(--font-ibm-mono);
  font-weight: 900;
  font-size: ${fontSizes[6]};
  width: 100%;
`