import styled from 'styled-components'
import * as P from '@/styles/parts'

export const All = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px;
  gap: 24px;
  ${P.medias[2]} { padding: 8px; }
  ${P.medias[6]} { padding: 16px; }
`
