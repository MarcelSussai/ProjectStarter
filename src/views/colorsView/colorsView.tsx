import { colorsNames, rawWeights } from '@/styles/makingColorsTheme/colors'
import * as S from './styles'
import { HeadTitleDefault } from '@/components/ui/type/headTitles'
import { BoldTextDefault, TextDefault } from '@/components/ui/type/textDefault'

export default function ColorsView() {

  return (
    <S.ContainerAll>
      <HeadTitleDefault>{'Cores disponíveis nas variáveis css:'}</HeadTitleDefault>
      <TextDefault>
        {` As variáveis css podem ser chamadas em qualquer lugar do projeto
          pois está sendo injetada no _app arquivo. `} <br />
        {` Essa tabela de cores é gerada automaticamente dependendo das cores configuradas no projeto `} <br />
        {` E cada cor possui um atributo de opacidade não mostrada nessa tabela, exemplo: `} <br />
        <BoldTextDefault> {` background: var(--color-wine-800-12); `} </BoldTextDefault> <br />
        {` 12 é a opacidade menos opaca e 1 é a mais transparente, ou seja, vai de 1 a 12 `} <br />
        {` Não está sendo usado o tema do styled components para armazenar essas cores nem as fontes, está tudo em váriável css injetada globalmente devido a performance e a melhoria na experiência do desenvolvedor. Para poder configurar as cores edite o arquivo: < src/styles/makingColorsTheme/colors.ts > - Lá irá poder configurar a cor 500 que é a cor escolhida e todos os tons e tons opacos dela será gerada automaticamente, podendo configurar quantas cores quiser.`} <br />

      </TextDefault>
      <S.All>
      {
        colorsNames.map((name, i1) => (
          <S.ItemColor key={i1}>
            {
              rawWeights.map((weight: string, i2: number) => (
                <S.Item key={i2} stretch={weight === '500'} color={`--color-${name}-${weight}`}>
                  --color-{name}-{weight}
                </S.Item>
              ))
            }
          </S.ItemColor>
        ))
      }
      </S.All>
    </S.ContainerAll>
  )
}