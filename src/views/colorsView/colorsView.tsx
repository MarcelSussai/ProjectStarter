import {
  FinalColors, colorsNames, colorsToTable,
  rawColorsKeysValues, rawWeights,
} from '@/styles/makingColorsTheme/colors'
import * as S from './styles'
import TextDefault, { BoldTextDefault } from '@/components/ui/type/textDefault'
import HeadTitles from '@/components/ui/type/headTitles'
import { Fragment, useState } from 'react'
import Table from '@/components/ui/table/table'
import { ColorsTableColumnsConfig } from './colorsTableColumnsConfig'
import { IValueComponent } from '@/components/ui/table/interfaces'
import { ImakeColorsTone } from '@/styles/makingColorsTheme/interfaces'


const optsColors = {
  optColumns: true,
  optFilters: false,
  optPrint: false,
  optDownload: false,
  optSearch: false,
}

const ExpandableTest = ({row, color = 'grey', rowId}: IValueComponent<any>) => {

  return (
    <>
      <S.ContainerColorsValues>
        <TextDefault>{`Estes são os códigos hexadecimais para cada peso de cor para uso somente a fins de design, para usar no código favor usar variável css como no exemplo!`}</TextDefault>
        {
          rawColorsKeysValues.map((group: any, i1: number) => (
            <Fragment key={i1}>
            { row.nameColor === group.colorName &&
              <S.AllColorValues>
                {
                  group.colors.map((colors: any, i2: number) => (
                    <S.ContainerColor stretch={colors[0] === 'c500' ? true : false}
                      color={`--color-${group.colorName}-${colors[0].substring(1)}`} key={i2}
                    >
                      <div>{ colors[0].substring(1) }</div>
                      <div>{ colors[1] }</div>
                    </S.ContainerColor>
                  ))
                }
              </S.AllColorValues>
            }
            </Fragment>
          ))
        }
      </S.ContainerColorsValues>
    </>
  )
}

export default function ColorsView() {
  
  const [colorsTableData, setColorsTableData] = useState({
    status: 200, results: colorsToTable
  })
  
  return (
    <S.ContainerAll>
      <HeadTitles>{'Cores disponíveis nas variáveis css:'}</HeadTitles>
      <TextDefault>
        {`As variáveis css podem ser chamadas em qualquer lugar do projeto
          pois está sendo injetada no _app arquivo. `} <br />
        {`Essa tabela de cores é gerada automaticamente dependendo das cores configuradas no projeto.`} <br />
        {`E cada cor possui um atributo de opacidade não mostrada nessa tabela, exemplo:`} <br />
        <BoldTextDefault> {` background: var(--color-wine-800-14); `} </BoldTextDefault> <br />
        {`14 é a opacidade menos opaca e 1 é a mais transparente, ou seja, vai de 1 a 14.`} <br />
        {`Não está sendo usado o tema do styled components para armazenar essas cores,
          está tudo em váriável css injetada globalmente devido a performance e a melhoria na experiência do desenvolvedor`} <br />
        {`Para poder configurar as cores edite o arquivo:`} <br />
        <BoldTextDefault>{`/src/styles/makingColorsTheme/colors.ts `} </BoldTextDefault> <br />
        {`Lá irá poder configurar a cor 500 que é a cor escolhida e todos os tons e tons opacos dela será gerada automaticamente, podendo configurar quantas cores quiser.`} <br />

      </TextDefault>

      <Table
        colorG1='main' colorG2='second' color1='default' showCheck={false}
        configColumns={ColorsTableColumnsConfig} alternateBg={false}
        data={colorsTableData} isLoading={false} showExpandableCell={true}
        sortByHeader={false} opts={optsColors}
        title='Cores configuradas no projeto em variáveis css'
        expandableComponent={ExpandableTest}
      />

    </S.ContainerAll>
  )
}