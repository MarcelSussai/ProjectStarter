import styled from 'styled-components'
import * as I from './interfaces'
import * as P from '@/styles/parts'

export const All = styled.section<I.IAll>`
  ${({color1})  => P.doCssColor(color1,  '025', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '025', 'c1', '-8')}
  ${({color1})  => P.doCssColor(color1,  '025', 'c1', '-10')}
  ${({color1})  => P.doCssColor(color1,  '050', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '075', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '100', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '100', 'c1', '-12')}
  ${({color1})  => P.doCssColor(color1,  '125', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '175', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '150', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '200', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '300', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '400', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '500', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '650', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '725', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '800', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-3')}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-4')}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-5')}
  ${({colorG1}) => P.doCssColor(colorG1, '100', 'g1')}
  ${({colorG2}) => P.doCssColor(colorG2, '100', 'g2')}
  ${({colorG1}) => P.doCssColor(colorG1, '500', 'g1')}
  ${({colorG2}) => P.doCssColor(colorG2, '500', 'g2')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  width: 100%;
  position: relative;
  /* border: solid 1px var(--c1-300); */
  box-shadow: 6px 6px 8px var(--c1-975-4);
  border-radius: ${P.roundeds[1]};
`

export const AllScroll = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  width: 100%;
  border: solid 4px var(--c1-025);
  border-radius: ${P.roundeds[1]};
  background: var(--c1-025);
  overflow: auto;
  position: relative;
  scrollbar-color: var(--c1-800) var(--c1-025);
  &::-webkit-scrollbar { width: 10px; height: 10px; }
  &::-webkit-scrollbar-button { display: none; }
  &::-webkit-scrollbar-track-piece { background: var(--c1-025); }
  &::-webkit-scrollbar-thumb { background: var(--c1-800); border-radius: 10px; }
`

export const WrapperAll = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  min-width: fit-content;
  width: 100%;
`

export const WrapperTable = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  position: relative;
`

export const TableTitle = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 8px;
  background: linear-gradient( 45deg, var(--g1-100), var(--g2-100) );
`

export const TitleText = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  align-items: center;
  padding: 8px 16px;
  line-height: 1;
  font-size: ${P.fontSizes[4]};
  border-radius: ${P.roundeds[1]};
  font-weight: 900;
  background: var(--c1-025-10);
  color: var(--c1-725);
`

export const TableHeader = styled.div<I.IStyTableHeader>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: grid;
  grid-template-columns: ${ ({sizesString}) => sizesString };
  position: relative;
  width: 100%;
  background: var(--c1-075);
  border-top: solid 1px var(--c1-300);
  border-bottom: solid 1px var(--c1-300);
`

export const TableRow = styled.div<I.ITableRow>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: grid;
  grid-template-columns: ${ ({sizesString}) => sizesString };
  ${({alternateBg}) => alternateBg && `background: var(--c1-050);`}
  background: ${({alternateBg}) => alternateBg ?
    'var(--c1-050)' : 'var(--c1-025)'
  };
  border-bottom: solid 1px var(--c1-125);
  min-height: 64px;
  cursor: pointer;
  &:hover {
    background: var(--c1-075);
  }
`

export const CellHeader = styled.div<I.ICellHeader>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 8px;
  position: relative;
  cursor: pointer;
  user-select: none;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    left: -1px;
    width: 1px;
    height: 72%;
    background: var(--c1-200);
    opacity: ${({isFirst}) => isFirst ? '0' : '1'};
  }
  &::after {
    content: '';
    position: absolute;
    right: 0px;
    width: 1px;
    height: 72%;
    background: var(--c1-200);
    opacity: ${({isLast}) => isLast ? '0' : '1'};
  }
  &:hover {background: var(--c1-125);}
`

export const CellHeaderSelector = styled.div<I.ICellHeaderSelector>`
  ${P.CenterFlex}
  width: 100%;
  background: var(--c1-075);
  border-right: solid 1px var(--c1-150);
  border-left: solid 1px var(--c1-150);
  position: relative;
  z-index: 4;
  &::after {
    transition: all .24s ease-in-out;
    content: '${({qtd}) => qtd}';
    /* content: '${({qtd}) => qtd !== '0' ? qtd : ''}'; */
    opacity: ${({qtd}) => qtd !== '0' ? '1' : '0'};
    position: absolute;
    top: -8px;
    right: -14px;
    border-radius: ${P.roundeds[2]};
    padding: 4px;
    color: var(--c1-025);
    background: var(--c1-800);
    font-family: var(--font-mono);
    font-weight: 400;
    font-size: ${P.fontSizes[1]};
    line-height: 1;
    min-width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const CellSelector = styled.div`
  ${P.CenterFlex}
  width: 100%;
  background: var(--c1-075);
  border-right: solid 1px var(--c1-150);
  border-left: solid 1px var(--c1-150);
`

export const TextHeader = styled.span`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  width: 100%;
  text-align: center;
  font-weight: 700;
  color: var(--c1-725);
  font-size: ${P.fontSizes[3]};
`

export const CellHeaderDetail = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  max-width: 32px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CellRow = styled.div<I.ICellRow>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  text-align: flex-start;
  line-height: 1.4;
  gap: 2px;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 8px;
  &::before {
    content: '';
    position: absolute;
    left: -1px;
    width: 1px;
    height: 64%;
    background: var(--c1-175);
    opacity: ${({isFirst}) => isFirst ? '0' : '1'};
  }
  &::after {
    content: '';
    position: absolute;
    right: 0px;
    width: 1px;
    height: 64%;
    background: var(--c1-175);
    opacity: ${({isLast}) => isLast ? '0' : '1'};
  }
`

export const AllTableOptions = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  position: absolute;
  right: 18px;
  top: 18px;
  z-index: 2;
`

export const IconOption = styled.button<I.IIconOption>`
  ${P.CenterFlex}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  width: 32px;
  height: 32px;
  border-radius: ${P.roundeds[16]};
  background: ${({opened}) => opened ? 'var(--c1-025)' : 'var(--c1-100-12)'} ;
  z-index: ${({zIndex}) => zIndex ? zIndex : '1'};
  cursor: pointer;
  box-shadow: 2px 2px 6px var(--c1-975-4);
  /* border: solid 1px var(--c1-200); */
  &:hover {
    background: var(--c1-025);
  }
  &:active {
    transition: all .1s ease-in-out;
    transform: translate3d(1px, 1px, 0);
    box-shadow: 1px 1px 6px var(--c1-975-4);
  }
`

export const OneOptions = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  position: relative;
  span.title {
    ${ P.ShowTransition }
    ${ P.TransitionDefault }
    font-size: ${P.fontSizes[3]};
    font-weight: 600;
    color: var(--c1-400);
    background: var(--c1-050);
    padding: 8px;
    user-select: none;
  }
`

export const OptionsColumns = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  box-shadow: 2px 2px 8px var(--c1-975-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0px;
  top: 40px;
  white-space: nowrap;
  /* border: solid 1px var(--c1-300); */
  border-radius: 8px;
  padding: 2px;
  background: var(--c1-025);
`