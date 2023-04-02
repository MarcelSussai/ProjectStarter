import * as S from './styles'
import * as I from './interfaces'



export default function ArrowUp({color = 'default', show = false, mode = 'up'}: I.IIcon) {
  return (
    <S.Svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      mode={mode}
      show={show}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.371.26a.889.889 0 0 1 1.258 0l7.11 7.111a.889.889 0 0 1-1.256 1.258L8.889 3.035V15.11a.889.889 0 0 1-1.778 0V3.035L1.517 8.629A.889.889 0 0 1 .26 7.37L7.371.261Z"
      />
    </S.Svg>
  )
}