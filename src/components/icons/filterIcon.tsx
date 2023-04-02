import * as S from './styles'
import * as I from './interfaces'



export default function FilterIcon({color = 'default', show = false, mode = 'up', width}: I.IIcon) {
  return (
    <S.Svg
      viewBox="0 0 40 41"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      mode={mode}
      show={show}
      width={width}
    >
      <path
        d="M20 .333c-9.571 0-20 2-20 6.429v6.429c0 .428.143.857.429 1l15.285 13.857v10.857c0 .428.286 1 .715 1.285.142.143.428.143.714.143s.428 0 .571-.142l5.715-2.858c.428-.285.857-.714.857-1.285v-8L39.57 14.19c.286-.286.429-.715.429-1V6.76C40 2.334 29.571.334 20 .334Zm0 2.857c11.429 0 17 2.572 17.143 3.572-.143 1-5.714 3.571-17.143 3.571S3 7.762 2.857 6.762C3 5.762 8.571 3.19 20 3.19Z"
      />
    </S.Svg>
  )
}