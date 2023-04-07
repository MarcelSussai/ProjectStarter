import styled from 'styled-components'
import * as I from './interfaces'
import * as P from '@/styles/parts'

export const Svg = styled.svg<I.ISvg>`
  fill: none;
  width: ${ ({width}) => width ? width : '12px' };
  height: ${ ({height}) => height ? height : '100%' };
  path {
    fill: ${({color}) => P.doCssColorVar(color, '775')};
  }
  transition: all .2s ease-in-out;
  transform: rotate(${({mode}) =>
    mode === 'up' ? '0deg' :
    mode === 'down' ? '180deg' :
    mode === 'left' ? '-90deg' :
    mode === 'right' ? '90deg' : '0deg'
  });
  opacity: ${ ({show}) => show ? '1' : '0' };
`