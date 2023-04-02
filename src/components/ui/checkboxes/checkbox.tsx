import * as S from './styles'
import * as I from './interfaces'

/*
  hidetext: esconde o texto
  fit: a largura se ajusta ao conteúdo
  noBg: remove o fundo e as bordas
 */
export default function Checkbox({
  text = 'Exemplo de um texto descritivo de um checkbox',
  hideText = false,
  checked = false,
  onChange,
  color = 'grey',
  fit = false,
  horizontalAlignment = 'flex-start',
  noBg = false,
}: I.ICheckbox) {

  return (
    <S.All color={`${color}`}
      noBg={noBg} fit={fit} checked={checked}
      horizontalAlignment={horizontalAlignment}
    >
      <S.WrapperCheckbox>
        <S.HiddenCheckbox checked={checked} onChange={onChange} />
        <S.StyledCheckbox checked={checked}>{'✔'}</S.StyledCheckbox>
      </S.WrapperCheckbox>
      { !hideText && <S.Text checked={checked}>{text}</S.Text> }
    </S.All>
  )
}