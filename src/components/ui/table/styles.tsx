import styled from 'styled-components'
import * as P from '@/styles/parts'
import * as I from './interfaces'

export const partOfTextShadow = () => {
  return `
  text-shadow:
    0px 0px 3px #00000040,
    2px 2px 2px #00000040,
    0px 0px 4px #00000024,
    -2px -2px 2px #00000024
  ;
  filter: drop-shadow(2px 2px 4px #00000088);
`
}
export const partOfBoxShadow = (isDown: boolean) => {
  if(isDown) {
    return `
      box-shadow:
        1px 1px 2px 2px #FFFFFF64,
        -2px -2px 2px 2px #00000024
      ;
    `
  }
  return `
  box-shadow:
    -1px -1px 2px 3px #FFFFFF72,
    2px 2px 3px 3px #00000024
  ;
`}
export const partOfBoxShadowAllTable = `
  box-shadow:
    -4px -4px 5px 3px #FFFFFFA0,
    5px 5px 6px 3px #00000016
  ;
`

export const All = styled.section<I.IAll>`
  ${({color1})  => P.doCssColor(color1,  '025', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '025', 'c1', '-8')}
  ${({color1})  => P.doCssColor(color1,  '025', 'c1', '-12')}
  ${({color1})  => P.doCssColor(color1,  '050', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '050', 'c1', '-10')}
  ${({color1})  => P.doCssColor(color1,  '075', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '100', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '125', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '150', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '175', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '175', 'c1', '-12')}
  ${({color1})  => P.doCssColor(color1,  '200', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '250', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '300', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '400', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '500', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '600', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '650', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '725', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '750', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '800', 'c1')}
  ${({color1})  => P.doCssColor(color1,  '850', 'c1',)}
  ${({color1})  => P.doCssColor(color1,  '900', 'c1',)}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-2')}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-3')}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-4')}
  ${({color1})  => P.doCssColor(color1,  '975', 'c1', '-6')}
  ${({colorG1}) => P.doCssColor(colorG1, '300', 'g1')}
  ${({colorG2}) => P.doCssColor(colorG2, '300', 'g2')}
  ${({colorG1}) => P.doCssColor(colorG1, '125', 'g1')}
  ${({colorG2}) => P.doCssColor(colorG2, '125', 'g2')}
  ${({colorG1}) => P.doCssColor(colorG1, '500', 'g1')}
  ${({colorG2}) => P.doCssColor(colorG2, '500', 'g2')}
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  width: calc(100%);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px 2px var(--c1-975-4);
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
  height: ${({showTitle}) => showTitle ? '64px' : '64px'};
  padding: 0px 0 4px 4px;
  background: linear-gradient( 1.8deg, var(--g1-125), var(--g2-125) );
`

export const TitleText = styled.div<I.IStyTableHeader>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  display: flex;
  align-items: flex-start;
  font-size: ${P.fontSizes[6]};
  height: calc(100% - 8px);
  padding: 4px 4px;
  line-height: 1;
  font-weight: 200;
  z-index: 1;
  color: var(--c1-900);
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
  background: var(--c1-175);
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
  if      ( alt && color !== undefined) { return `var(--color-${color}-050)` }
  else if (!alt && color !== undefined) { return `var(--color-${color}-050)` }
  else if (!alt && color === undefined) { return `var(--c1-050)` }
  else if ( alt && color === undefined) { return `var(--c1-075)` }
  return 'var(--c1-050)'
}

export const TableRow = styled.div<I.ITableRow>`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  ${({statusColor}) => statusColor && `--c1-100: var(--color-${statusColor}-075);`}
  display: grid;
  grid-template-columns: ${ ({sizesString}) => sizesString };
  background: ${({alternateBg, statusColor}) => aux({alt: alternateBg, color: statusColor}) };
  min-height: 36px;
  cursor: pointer;
  z-index: 1;
  &:hover { background: var(--c1-100); }
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
  padding: 0px 8px 0 8px;
  position: relative;
  cursor: ${({sortByHeader}) => sortByHeader ? 'pointer' : 'default'};
  user-select: none;
  z-index: 1;
  box-shadow:
    inset -4px -4px 8px var(--c1-975-2),
    inset 4px 4px 8px #FFFFFF72
  ;
  &::before {
    content: '';
    position: absolute;
    left: -1px;
    width: 1px;
    height: 64%;
    background: var(--c1-300);
    opacity: ${({isFirst}) => isFirst ? '0' : '1'};
  }
  &::after {
    content: '';
    position: absolute;
    right: 0px;
    width: 1px;
    height: 64%;
    background: var(--c1-300);
    opacity: ${({isLast}) => isLast ? '0' : '1'};
  }
  &:hover {background: var(--c1-150);}
  &:active {
    background: transparent;
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
  background: var(--c1-100);
  border-right: solid 1px var(--c1-200);
  position: relative;
  z-index: 2;
  &::after {
    content: '${({qtd}) => qtd}';
    transition: all .24s ease-in-out;
    opacity: ${({qtd}) => qtd !== '0' ? '1' : '0'};
    z-index: 3;
    ${P.CenterFlex}
    position: absolute;
    background: var(--c1-750);
    width: fit-content;
    min-width: 20px;
    min-height: 20px;
    top: 28px;
    right: -10px;
    border-radius: ${P.roundeds[16]};
    color: var(--c1-025);
    font-family: var(--font-mono);
    font-weight: 400;
    font-size: ${P.fontSizes[1]};
    line-height: 1;
  }
`

export const ExtraCell = styled.div`
  ${P.CenterFlex}
  width: 100%;
  height: calc(100%);
  z-index: 1;
  border-bottom: solid 1px var(--c1-150);
  border-right: solid 1px var(--c1-150);
  position: relative;
  background: var(--c1-025-8);
`

export const ExtraCellHeader = styled.div`
  ${P.CenterFlex}
  width: 100%;
  height: calc(100%);
  z-index: 1;
  border-right: solid 1px var(--c1-250);
  position: relative;
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
  ${ P.Size('100%') }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  line-height: 1;
  font-weight: 700;
  color: var(--c1-725);
  padding: 2px 0 0 0;
  font-size: ${P.fontSizes[2]};
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
  gap: 10px;
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 2;
  min-width: fit-content;
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
  border: solid 2px transparent;
  background: var(--c1-175);
  backdrop-filter: blur(4px);
  z-index: ${({zIndex}) => zIndex ? zIndex : '4'};
  cursor: pointer;
  ${partOfBoxShadow(false)}
  /* border: solid 1px var(--c1-025); */
  ${({opened}) => opened ?
    `transform: translate3d(1px, 1px, 0);
      ${partOfBoxShadow(true)}
      /* border: solid 3px var(--c1-025-12); */
      &:hover {
        /* background: var(--c1-175-12); */
        /* border: solid 2px var(--c1-050-10); */
        border: solid 2px var(--c1-025-12);
      }
    `
    : `
      &:hover {
        /* background: var(--c1-175); */
        border: solid 2px var(--c1-025-12);
      }
    `
  }
  &:active {
    /* background: var(--c1-025-12); */
    transition: all .1s ease-in-out;
    transform: translate3d(1px, 1px, 0);
    ${partOfBoxShadow(true)}
    border: solid 2px transparent;
  }
`

export const inputSearch = styled.input`
  ${P.TransitionDefault}
  ${P.ShowTransition}
  width: 224px;
  height: 40px;
  border: solid 1px var(--c1-500);
  background: var(--c1-050);
  color: var(--c1-800);
  backdrop-filter: blur(4px);
  padding: 4px 16px 2px 16px;
  font-weight: 600;
  font-size: ${P.fontSizes[2]};
  border-radius: ${P.roundeds[7]};
  z-index: 999;
  box-shadow:
    inset 2px 2px 6px 2px var(--c1-975-3),
    inset -2px -2px 4px 2px #FFFFFF32
  ;
  position: absolute;
  right: calc(100% + 16px);
`

export const OneOptions = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  position: relative;
  span.title {
    ${ P.ShowTransition }
    ${ P.TransitionDefault }
    ${ P.CenterFlex }
    position: absolute;
    top: 0;
    font-size: ${P.fontSizes[3]};
    font-weight: 400;
    line-height: 1;
    color: var(--c1-750);
    background: var(--c1-100);
    padding: 8px;
    width: calc(100% - 0px);
    height: fit-content;
    /* border-bottom: solid 1px var(--c1-200); */
    z-index: 4;
    user-select: none;
  }
`

export const ScrollOptionsWrapper = styled.div`
  ${P.TransitionDefault}
  ${P.ShowTransition}
  ${P.ColumnFlex}
  flex-wrap: nowrap;
  max-height: 360px;
  min-width: 248px;
  width: 100%;
  overflow: auto;
  scrollbar-color: var(--c1-800) var(--c1-075);
  &::-webkit-scrollbar { width: 10px; height: 10px; }
  &::-webkit-scrollbar-button { display: none; }
  &::-webkit-scrollbar-track-piece {
    background: var(--c1-075);
    border-radius: 0 0px 6px 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--c1-800);
    border-radius: 0 0px 6px 0px;
  }
`

export const OptionsColumns = styled.div`
  ${ P.ShowTransition }
  ${ P.TransitionDefault }
  ${P.ColumnFlex}
  flex-wrap: nowrap;
  box-shadow: 0px 0px 8px var(--c1-975-6);
  position: absolute;
  right: 0px;
  top: 44px;
  overflow: hidden;
  /* outline: solid 1px var(--c1-300); */
  border: solid 4px var(--c1-025);
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
  ${P.TransitionFn('.48s')}
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
  border: solid ${ ({isOpen}) => isOpen ? '16px var(--c1-025)' : '0px transparent' };
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