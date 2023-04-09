import styled from 'styled-components'
import * as P from '@/styles/parts'
import * as I from './interfaces'

export const All = styled.section<I.IAll>`
  ${({color1})  => P.doCssColor(color1,  '025', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '025', 'c1', '-7')}
  ${({color1})  => P.doCssColor(color1,  '025', 'c1', '-8')}
  ${({color1})  => P.doCssColor(color1,  '025', 'c1', '-10')}
  ${({color1})  => P.doCssColor(color1,  '050', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '075', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '100', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '125', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '150', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '175', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '200', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '300', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '400', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '500', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '600', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '650', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '675', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '700', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '725', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '750', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '775', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '800', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '825', 'c1',)}
  ${({color1})  => P.doCssColor(color1,  '850', 'c1',)}
  ${({color1})  => P.doCssColor(color1,  '900', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-1')}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-2')}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-3')}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-4')}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-5')}
  ${({colorG1}) => P.doCssColor(colorG1, '125', 'g1')}
  ${({colorG2}) => P.doCssColor(colorG2, '125', 'g2')}
  ${({colorG1}) => P.doCssColor(colorG1, '500', 'g1')}
  ${({colorG2}) => P.doCssColor(colorG2, '500', 'g2')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  width: calc(100%);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 8px 2px var(--c1-975-3);
  border: solid 2px var(--c1-025);
  border-radius: ${({showTableHeaderOptions}) => showTableHeaderOptions && P.roundeds[3]};
`

export const AllScroll = styled.div<I.IAllScroll>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  width: 100%;
  ${({isRadius}) => isRadius && false && `
    border: solid 4px var(--c1-025);
    border-radius: ${P.roundeds[4]};
  `}
  background: var(--c1-025);
  position: relative;
  overflow: auto;
  scrollbar-color: var(--c1-800) var(--c1-125);
  &::-webkit-scrollbar { width: 10px; height: 10px; }
  &::-webkit-scrollbar-button { display: none; }
  &::-webkit-scrollbar-track-piece {
    background: var(--c1-125);
    ${({isRadius}) => isRadius && `border-radius:  0 0 6px 6px;`}
  }
  &::-webkit-scrollbar-thumb {
    background: var(--c1-800);
    ${({isRadius}) => isRadius && `border-radius:  0 0 6px 6px;`}
  }
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

export const TableTitle = styled.div<I.ITableTitle>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({showTitle}) => showTitle ? '48px' : '48px'};
  padding: 4px 0 4px 4px;
  background: linear-gradient( 1deg, var(--g1-125), var(--g2-125) );
`

export const TitleText = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 12px;
  line-height: 1;
  font-size: ${P.fontSizes[7]};
  font-weight: 900;
  color: var(--c1-900);
  border-radius: ${P.roundeds[3]} 0 0 0;
`

export const TableHeader = styled.div<I.IStyTableHeader>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: grid;
  grid-template-columns: ${ ({sizesString}) => sizesString };
  position: relative;
  width: 100%;
  min-height: 36px;
  z-index: 2;
  background: var(--c1-125);
  ${({showTableHeaderOptions}) => showTableHeaderOptions ?
    'border-top: solid 1px var(--c1-300);' :
    ''
  }
  border-bottom: solid 1px var(--c1-300);
`
interface Iaux {
  alt?: boolean
  color?: string
}

const aux = ({alt = false, color}: Iaux) => {
  if      ( alt && color !== undefined) { return `var(--color-${color}-025)` }
  else if (!alt && color !== undefined) { return `var(--color-${color}-025)` }
  else if (!alt && color === undefined) { return `var(--c1-025)` }
  else if ( alt && color === undefined) { return `var(--c1-075)` }
  return 'var(--c1-025)'
}

export const TableRow = styled.div<I.ITableRow>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  ${({statusColor}) => statusColor && `--c1-125: var(--color-${statusColor}-050);`}
  display: grid;
  grid-template-columns: ${ ({sizesString}) => sizesString };
  background: ${({alternateBg, statusColor}) => aux({alt: alternateBg, color: statusColor}) };
  min-height: 32px;
  cursor: pointer;
  z-index: 1;
  &:hover { background: var(--c1-125); }
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
  cursor: ${({sortByHeader}) => sortByHeader ? 'pointer' : 'default'};
  user-select: none;
  z-index: 1;
  box-shadow:
    inset -4px -4px 12px var(--c1-975-3),
    inset 4px 4px 12px #FFFFFF88
  ;
  &::before {
    content: '';
    position: absolute;
    left: -1px;
    width: 1px;
    height: 72%;
    background: var(--c1-300);
    opacity: ${({isFirst}) => isFirst ? '0' : '1'};
  }
  &::after {
    content: '';
    position: absolute;
    right: 0px;
    width: 1px;
    height: 72%;
    background: var(--c1-300);
    opacity: ${({isLast}) => isLast ? '0' : '1'};
  }
  &:hover {background: var(--c1-175);}
  &:active {
    box-shadow:
      inset 0px 0px 4px transparent,
      inset 0px 0px 4px transparent
    ;
  }
`

export const CellHeaderSelector = styled.div<I.ICellHeaderSelector>`
  ${P.CenterFlex}
  width: 100%;
  height: calc(100% + 0px);
  background: var(--c1-025);
  border-right: solid 1px var(--c1-150);
  position: relative;
  z-index: 2;
  &::after {
    z-index: 3;
    ${P.CenterFlex}
    transition: all .24s ease-in-out;
    content: '${({qtd}) => qtd}';
    opacity: ${({qtd}) => qtd !== '0' ? '1' : '0'};
    position: absolute;
    /* border-right: solid 1px var(--c1-150); */
    ${P.CenterFlex}
    /* width: calc(100% + 2px); */
    background: var(--c1-725);
    width: fit-content;
    min-width: 16px;
    min-height: 16px;
    top: 28px;
    right: -8px;
    /* border-top-left-radius: ${P.roundeds[4]};
    border-top-right-radius: ${P.roundeds[4]}; */
    border-radius: ${P.roundeds[16]};
    padding: 0 4px;
    color: var(--c1-025);
    font-family: var(--font-mono);
    font-weight: 400;
    font-size: ${P.fontSizes[1]};
    line-height: 1;
  }
`

export const CellSelector = styled.div`
  ${P.CenterFlex}
  width: 100%;
  height: calc(100%);
  background: var(--c1-025);
  border-right: solid 1px var(--c1-150);
  /* border-left: solid 1px var(--c1-150); */
  /* border-bottom: solid 1px var(--c1-150); */
  z-index: 1;
`

export const TextHeader = styled.span`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  ${ P.CenterFlex }
  ${ P.Size('100%') }
  text-align: start;
  line-height: 1;
  font-weight: 800;
  color: var(--c1-800);
  font-size: ${P.fontSizes[3]};
`

export const CellHeaderDetail = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  max-width: 12px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CellRow = styled.div<I.ICellRow>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  ${({statusColor}) => statusColor && `--c1-300: var(--color-${statusColor}-300);`}
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  gap: 2px;
  width: 100%;
  height: 100%;
  position: relative;
  ${({altBg, isLastRow}) => !altBg && !isLastRow ? `
  border-bottom: 1px solid var(--c1-200);
  ` : ``}

  &::before {
    content: '';
    position: absolute;
    left: -1px;
    width: 1px;
    height: 40%;
    background: var(--c1-300);
    opacity: ${({isFirst}) => isFirst ? '0' : '1'};
  }
  &::after {
    content: '';
    position: absolute;
    right: 0px;
    width: 1px;
    height: 40%;
    background: var(--c1-300);
    opacity: ${({isLast}) => isLast ? '0' : '1'};
  }
`

export const AllTableOptions = styled.div<I.IAllTableOptions>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  --rawPositionRightTop: ${({showTitle}) => showTitle ? '10px' : '10px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 2;
  /* border-radius: ${P.roundeds[3]}; */
  /* box-shadow: 2px 2px 6px var(--c1-975-4); */
  /* border-right: solid 1px var(--c1-300); */
  /* border-top: solid 1px var(--c1-300); */
  /* border-bottom: solid 1px var(--c1-300); */
`

export const IconOption = styled.button<I.IIconOption>`
  ${ P.CenterFlex }
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  width: 32px;
  height: 32px;
  border-radius: ${P.roundeds[16]};
  background: ${({opened}) => opened ? 'var(--c1-050)' : 'var(--c1-150)'};
  backdrop-filter: blur(4px);
  z-index: ${({zIndex}) => zIndex ? zIndex : 'unset'};
  cursor: pointer;
  box-shadow: 2px 2px 4px var(--c1-975-5);
  border: solid 1px var(--c1-025);
  ${({opened}) => opened ? 'transform: translate3d(2px, 2px, 0);' : ''}
  &:hover {
    background: var(--c1-050);
  }
  &:active {
    transition: all .1s ease-in-out;
    transform: translate3d(2px, 2px, 0);
    box-shadow: 1px 1px 4px var(--c1-975-5);
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
    font-weight: 900;
    color: var(--c1-650);
    background: var(--c1-050);
    padding: 8px;
    user-select: none;
    position: absolute;
    width: calc(100% - 0px);
    height: calc(100% - 0px);
    top: 0;
    line-height: 1;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const OptionsColumns = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  box-shadow: 4px 4px 16px var(--c1-975-5);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${P.medias[1]} { grid-template-columns: repeat(2, 1fr); }
  ${P.medias[2]} { grid-template-columns: repeat(3, 1fr); }
  ${P.medias[8]} { grid-template-columns: repeat(6, 1fr); }
  ${P.medias[16]} { grid-template-columns: repeat(8, 1fr); }
  ${P.medias[26]} { grid-template-columns: repeat(12, 1fr); }
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  top: 48px;
  min-width: 144px;
  white-space: nowrap;
  overflow: hidden;
  outline: solid 1px var(--c1-300);
  border: solid 4px var(--c1-050);
  border-radius: 8px;
  padding-top: 32px;
  background: var(--c1-025);
  z-index: 9999;
  
`

export const ExpandableAll = styled.div`
  ${P.Size('100%')}
  ${P.TransitionDefault}
`

export const ExpandableIcon = styled.div`
  ${P.CenterFlex}
  ${P.Size('100%')}
  background: var(--c1-025-8);
  /* border-bottom: solid 1px var(--c1-150); */
`

export const ExpandableWrapper = styled.div<I.IExapandableWrapper>`
  ${P.TransitionFn('.4s')}
  height: auto;
  width: 100%;
  max-height:${ ({isOpen, elementHeight}) => isOpen ? `${elementHeight}px` : '0px' };
  transform-origin: top center;
  opacity: ${ ({isOpen}) => isOpen ? '1' : '0' };
  overflow: ${ ({isOpen}) => isOpen ? 'visible' : 'hidden' };
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
  border: solid ${ ({isOpen}) => isOpen ? '16px var(--c1-050)' : '0px transparent' };
  /* border-top: solid ${ ({isOpen}) => isOpen ? '12px var(--c1-200)' : '0px transparent' };
  border-bottom: solid ${ ({isOpen}) => isOpen ? '12px var(--c1-200)' : '0px transparent' };
  border-left: solid ${ ({isOpen}) => isOpen ? '12px var(--c1-200)' : '0px transparent' };
  border-right: solid ${ ({isOpen}) => isOpen ? '12px var(--c1-200)' : '0px transparent' }; */
`

export const Footer = styled.div`
  ${P.TransitionDefault}
  ${P.ShowTransition}
  ${P.Size('100%')}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--c1-200);
`