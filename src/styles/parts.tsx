import { css, keyframes } from 'styled-components'

// 33 breakpoints definidos por padrão, uso: mBps[24]
export const mBps = [
  '360px', // 0
  '400px', // 1
  '464px', // 2
  '488px', // 3
  '512px', // 4
  '528px', // 5
  '560px', // 6
  '600px', // 7
  '632px', // 8
  '688px', // 9
  '712px', // 10
  '728px', // 11
  '768px', // 12
  '800px', // 13
  '864px', // 14
  '888px', // 15
  '912px', // 16
  '968px', // 17
  '992px', // 18
  '1024px', // 19
  '1112px', // 20
  '1168px', // 21
  '1200px', // 22
  '1264px', // 23
  '1328px', // 24
  '1400px', // 25
  '1480px', // 26
  '1560px', // 27
  '1680px', // 28
  '1760px', // 29
  '1824px', // 30
  '1912px', // 31
  '2000px', // 32
]

export const medias = mBps.map(bp => {
  return `@media (min-width: ${bp})`
})

export const fontSizes = [
  '1rem',    // 0
  '1.24rem',  // 1
  '1.48rem',  // 2
  '1.6rem',  // 3
  '1.88rem',  // 4
  '2rem',    // 5
  '2.4rem',  // 6
  '2.88rem',  // 7
  '3.2rem',  // 8
  '3.64rem',  // 9
  '4rem',    // 10
  '4.8rem',  // 11
  '5.64rem',  // 12
  '6.4rem',  // 13
  '7.24rem',  // 14
  '8rem',    // 15
  '8.8rem',  // 16
  '9.64rem',  // 17
  '10.24rem', // 18
]

export const roundeds = [
  '2px',   // 0
  '4px',   // 1
  '6px',   // 2
  '8px',   // 3
  '10px',  // 4
  '12px',  // 5
  '14px',  // 6
  '16px',  // 7
  '20px',  // 8
  '24px',  // 9
  '32px',  // 10
  '40px',  // 11
  '64px',  // 12
  '80px',  // 13
  '120px', // 14
  '200px', // 15
  '9999px', // 16
]

export const CenterFlex = css `
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ColumnFlex = css `
  display: flex;
  flex-direction: column;
`

export const GridAutoFit = (min: string, max?: string) => css `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${min}, ${max || '1fr'}));
`

export const GridAutoFill = (min: string, max?: string) => css `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${min}, ${max || '1fr'}));
`

export const Size = (value: string) => css `
  width: ${value};
  height: ${value};
`

export const TextEllipsis = css `
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

interface ITextClamp {
  start?: number
  mid?: string
  end?: number
}
export const TextClamp = ({ start = 2, mid = '1.48vw', end = 2 }: ITextClamp) => css `
  font-size: clamp(${fontSizes[start]},  ${mid},  ${fontSizes[end]});
`

interface ITransitionFn {
  name?: string
  time?: string
  easing?: string
  delay?: string
}
export const TransitionFn = ({
  time = '.16s', easing = 'ease-in-out', name = 'all', delay = ''
}: ITransitionFn) => css ` transition: ${name} ${time} ${easing} ${delay}; `

const showKeys = keyframes `
  from { opacity: 0; }
  to { opacity: 1; }
`
export const ShowTransition = css `
  opacity: 0;
  animation: ${showKeys} .24s ease-in-out forwards;
`

export const doCssColor = (
  color: string, weight: string, localName: string, alpha?: string
) => `
--${localName}-${weight}${alpha || ''}: var(--color-${color}-${weight}${alpha || ''});`

export const doCssColorVar = (
  color: string, weight: string, alpha?: string
) => `var(--color-${color}-${weight}${alpha || ''})`
