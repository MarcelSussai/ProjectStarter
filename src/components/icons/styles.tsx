import styled from 'styled-components'
import * as I from './interfaces'
import * as P from '@/styles/parts'

export const Svg = styled.svg<I.ISvg>`
  ${ P.TransitionFn({}) }
  fill: none;
  width: ${ ({width}) => width ? width : '14px' };
  height: ${ ({height}) => height ? height : '100%' };
  path {
    ${ P.TransitionFn({}) }
    fill: ${({color}) => P.doCssColorVar(color, '700')};
  }
  transform: rotate(${({mode}) =>
    mode === 'up' ? '0deg' :
    mode === 'down' ? '180deg' :
    mode === 'left' ? '-90deg' :
    mode === 'right' ? '90deg' : '0deg'
  });
  opacity: ${ ({show}) => show ? '1' : '0' };
`