import * as S from './styles'
import * as I from './interfaces'



export default function PrintIcon({color = 'default', show = false, mode = 'up', width}: I.IIcon) {
  return (
    <S.Svg
      viewBox="0 0 34 41"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      mode={mode}
      show={show}
      width={width}
    >
    <path
      d="m21.668.333 8.591 8.595v5.466h.449a3.117 3.117 0 0 1 3.108 3.105v13.559a3.117 3.117 0 0 1-3.108 3.106h-.449v4.838a1.337 1.337 0 0 1-1.331 1.331H4.888a1.337 1.337 0 0 1-1.33-1.331v-4.838h-.45A3.117 3.117 0 0 1 0 31.06V17.499a3.117 3.117 0 0 1 3.109-3.105h.448V1.668A1.334 1.334 0 0 1 4.89.333h16.779Zm-.617 10.865a1.71 1.71 0 0 1-1.704-1.704V3.439H6.663v10.955h20.49v-3.196h-6.102Zm6.103 12.648H6.663v13.379h20.49v-13.38Zm-2.955 2.45H9.455v3.108h14.744v-3.108Zm0 5.5H9.455V34.9h14.744v-3.106Zm6.831-12.573a1.553 1.553 0 1 0-3.105 0 1.553 1.553 0 0 0 3.105 0Z"
    />
    </S.Svg>
  )
}