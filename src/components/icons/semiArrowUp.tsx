import * as S from './styles'
import * as I from './interfaces'



export default function SemiArrowUp({color = 'default', show = false, mode = 'up'}: I.IIcon) {
  return (
    <S.Svg
      viewBox="0 0 16 10"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      mode={mode}
      show={show}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.107.376a1.25 1.25 0 0 1 1.786 0L15.63 7.22a1.298 1.298 0 0 1 0 1.815 1.249 1.249 0 0 1-1.786 0L8 3.098 2.156 9.036a1.25 1.25 0 0 1-1.786 0 1.298 1.298 0 0 1 0-1.815L7.107.376Z"
      />
    </S.Svg>
  )
}