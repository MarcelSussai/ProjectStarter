import styled, { keyframes } from 'styled-components'
import * as I from './interfaces'
import * as P from '@/styles/parts'


const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const All = styled.div<I.IAll>`
  --border-size-01: 4px;
  --border-size-02: 1px;
  --border-size-03: 1px;
  --time-01: 3.2s;
  --time-02: 1.6s;
  --border-color-transparent: #0000;
  ${({color}) => P.doCssColor(color, '025', 'color', '-1')}
  ${({color}) => P.doCssColor(color, '025', 'color', '-6')}
  ${({color}) => P.doCssColor(color, '600', 'color')}
  ${({color}) => P.doCssColor(color, '650', 'color', '-12')}
  ${({color}) => P.doCssColor(color, '650', 'color', '-10')}
  ${({color}) => P.doCssColor(color, '650', 'color', '-8')}
  ${({color}) => P.doCssColor(color, '650', 'color', '-6')}
  ${({color}) => P.doCssColor(color, '650', 'color', '-4')}
  ${({color}) => P.doCssColor(color, '675', 'color')}
  ${({color}) => P.doCssColor(color, '975', 'color', '-2')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  overflow: hidden;
  width: 100%;
  background: var(--color-025-1);
  /* border-radius: ${P.roundeds[1]}; */
  backdrop-filter: blur(2px);
	grid-column: 1 / -1;
  font-weight: 900;
  border: solid 8px var(--color-025-1);
  color: var(--color-600);
`

export const ContainerAllLoading = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 96px;
  height: 96px;

`
// var(--border-size-01)
const size = '88px'
export const ContainerLoading = styled.div`
  width: ${size};
  height: ${size};
  border-radius: ${size};
  border-left: solid var(--border-size-01) var(--color-675);
  border-top: solid var(--border-size-01) var(--border-color-transparent);
  border-right: solid var(--border-size-01) var(--border-color-transparent);
  border-bottom: solid var(--border-size-01) var(--border-color-transparent);
  animation: ${rotate} 4s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-sizing: content-box;

  div.circle-01 {
    position: absolute;
    width: calc(${size} - 16px);
    height: calc(${size} - 16px);
    border-radius: ${size};
    border-left: solid var(--border-size-03) var(--color-650-12);
    border-bottom: solid var(--border-size-03) var(--border-color-transparent);
    border-right: solid var(--border-size-03) var(--border-color-transparent);
    border-top: solid var(--border-size-03) var(--border-color-transparent);
    animation: ${rotate} 1.6s linear reverse infinite;
  }
  div.circle-02 {
    position: absolute;
    width: calc(${size} - 32px);
    height: calc(${size} - 32px);
    border-radius: ${size};
    border-left: solid var(--border-size-02) var(--color-650-10);
    border-top: solid var(--border-size-02) var(--border-color-transparent);
    border-right: solid var(--border-size-02) var(--border-color-transparent);
    border-bottom: solid var(--border-size-02) var(--border-color-transparent);
    animation: ${rotate} 3.2s linear infinite;
  }
  div.circle-03 {
    position: absolute;
    width: calc(${size} - 48px);
    height: calc(${size} - 48px);
    border-radius: ${size};
    border-left: solid var(--border-size-03) var(--color-650-8);
    border-bottom: solid var(--border-size-03) var(--border-color-transparent);
    border-right: solid var(--border-size-03) var(--border-color-transparent);
    border-top: solid var(--border-size-03) var(--border-color-transparent);
    animation: ${rotate} 1s linear reverse infinite;
  }
  div.circle-04 {
    /* display: none; */
    position: absolute;
    width: calc(${size} - 64px);
    height: calc(${size} - 64px);
    border-radius: ${size};
    border-left: solid var(--border-size-02) var(--color-650-6);
    border-top: solid var(--border-size-02) var(--border-color-transparent);
    border-right: solid var(--border-size-02) var(--border-color-transparent);
    border-bottom: solid var(--border-size-02) var(--border-color-transparent);
    animation: ${rotate} 2.4s linear infinite;
  }
  div.circle-05 {
    position: absolute;
    width: calc(${size} - 80px);
    height: calc(${size} - 80px);
    border-radius: ${size};
    border-left: solid var(--border-size-03) var(--color-650-12);
    border-bottom: solid var(--border-size-03) var(--color-650-12);
    border-right: solid var(--border-size-03) var(--border-color-transparent);
    border-top: solid var(--border-size-03) var(--border-color-transparent);
    animation: ${rotate} .4s linear reverse infinite;
  }
`
