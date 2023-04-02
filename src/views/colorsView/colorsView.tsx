import { FinalColors, colorsNames, rawColorsKeysValues, rawWeights } from '@/styles/makingColorsTheme/colors'
import * as S from './styles'
import TextDefault, { BoldTextDefault } from '@/components/ui/type/textDefault'
import HeadTitles from '@/components/ui/type/headTitles'

export default function ColorsView() {
  
  return (
    <S.ContainerAll>
      <HeadTitles>{'Cores disponíveis nas variáveis css:'}</HeadTitles>
      <TextDefault>
        {` As variáveis css podem ser chamadas em qualquer lugar do projeto
          pois está sendo injetada no _app arquivo. `} <br />
        {` Essa tabela de cores é gerada automaticamente dependendo das cores configuradas no projeto `} <br />
        {` E cada cor possui um atributo de opacidade não mostrada nessa tabela, exemplo: `} <br />
        <BoldTextDefault> {` background: var(--color-wine-800-13); `} </BoldTextDefault> <br />
        {` 14 é a opacidade menos opaca e 1 é a mais transparente, ou seja, vai de 1 a 14 `} <br />
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
      <HeadTitles>{'Valores Hexadecimais das cores (não utilizar no código, somente a fim de design):'}</HeadTitles>
      <S.ContainerColorsValues>
        {
          rawColorsKeysValues.map((group: any, i1: number) => (
            <S.AllColorValues key={i1}>
              <S.ColorName>{ group.colorName }</S.ColorName>
              {
                group.colors.map((colors: any, i2: number) => (
                  <S.ContainerColor color={`--color-${group.colorName}-${colors[0].substring(1)}`} key={i2}>
                    <div>{ colors[0].substring(1) }</div>
                    <div>{ colors[1] }</div>
                  </S.ContainerColor>
                ))
              }
            </S.AllColorValues>
          ))
        }
      </S.ContainerColorsValues>
    </S.ContainerAll>
  )
}