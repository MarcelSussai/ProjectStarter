import * as S from './styles'
import * as I from './interfaces'



export default function DownloadIcon({color = 'default', show = false, mode = 'up', width}: I.IIcon) {
  return (
    <S.Svg
      viewBox="0 0 53 40"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      mode={mode}
      show={show}
      width={width}
    >
    <path
      d="M16.25 15C16.25 9.47715 20.7272 5 26.25 5C31.7728 5 36.25 9.47715 36.25 15V17.5H38.75C43.5825 17.5 47.5 21.4175 47.5 26.25C47.5 31.0825 43.5825 35 38.75 35H38.5C37.1193 35 36 36.1193 36 37.5C36 38.8807 37.1193 40 38.5 40H38.75C46.344 40 52.5 33.844 52.5 26.25C52.5 19.4482 47.5613 13.7999 41.074 12.6956C39.9655 5.50533 33.7508 0 26.25 0C18.7494 0 12.5345 5.50533 11.4259 12.6956C4.93878 13.7999 0 19.4482 0 26.25C0 33.844 6.15608 40 13.75 40H14C15.3807 40 16.5 38.8807 16.5 37.5C16.5 36.1193 15.3807 35 14 35H13.75C8.9175 35 5 31.0825 5 26.25C5 21.4175 8.9175 17.5 13.75 17.5H16.25V15ZM28.75 17.5C28.75 16.1193 27.6308 15 26.25 15C24.8693 15 23.75 16.1193 23.75 17.5V31.4645L20.5178 28.2323C19.5415 27.256 17.9586 27.256 16.9822 28.2323C16.0059 29.2085 16.0059 30.7915 16.9822 31.7677L24.4823 39.2677C25.4585 40.244 27.0415 40.244 28.0178 39.2677L35.5178 31.7677C36.494 30.7915 36.494 29.2085 35.5178 28.2323C34.5415 27.256 32.9585 27.256 31.9823 28.2323L28.75 31.4645V17.5Z"
    />
    </S.Svg>
  )
}