import * as S from './styles'
import * as I from './interfaces'



export default function ColumnsIcon({
  color = 'default', show = false, mode = 'up', width, height
}: I.IIcon) {
  return (
    <S.Svg
      viewBox="0 0 58 40"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      mode={mode}
      show={show}
      width={width}
      height={height}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.953 0H9.238A8.571 8.571 0 0 0 .667 8.571V31.43A8.571 8.571 0 0 0 9.238 40h5.715V0Zm5.714 40H37.81V0H20.667v40ZM43.524 0v40h5.714a8.572 8.572 0 0 0 8.572-8.571V8.57A8.572 8.572 0 0 0 49.238 0h-5.714Z"
      />
    </S.Svg>
  )
}