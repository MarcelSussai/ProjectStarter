import * as S from './styles'
import * as I from './interfaces'



export default function SearchIcon({
  color = 'default', show = false, mode = 'up', width, height
}: I.IIcon) {
  return (
    <S.Svg
      viewBox="0 0 40 40"
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
        d="M17.1117 0C7.66114 0 0 7.66114 0 17.1117C0 26.5622 7.66114 34.2233 17.1117 34.2233C20.8618 34.2233 24.3303 33.0169 27.1501 30.971L35.6515 39.4725C36.3549 40.1758 37.4954 40.1758 38.1988 39.4725L39.4725 38.1988C40.1758 37.4954 40.1758 36.3549 39.4725 35.6515L30.971 27.1501C33.0169 24.3303 34.2233 20.8618 34.2233 17.1117C34.2233 7.66114 26.5622 0 17.1117 0ZM5.40368 17.1117C5.40368 10.6455 10.6455 5.40368 17.1117 5.40368C23.5779 5.40368 28.8196 10.6455 28.8196 17.1117C28.8196 23.5779 23.5779 28.8196 17.1117 28.8196C10.6455 28.8196 5.40368 23.5779 5.40368 17.1117Z"
      />
    </S.Svg>
  )
}