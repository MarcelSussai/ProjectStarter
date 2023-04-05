'use client'
import { FinalColors, colorsNames, colorsToTable, rawColorsKeysValues, rawWeights,
} from '@/styles/makingColorsTheme/colors'
import * as S from './styles'
import TextDefault, { BoldTextDefault } from '@/components/ui/type/textDefault'
import HeadTitles from '@/components/ui/type/headTitles'
import { Fragment, useState, useEffect } from 'react';
import Table from '@/components/ui/table/table'
import { ColorsTableColumnsConfig } from './colorsTableColumnsConfig'
import { IValueComponent } from '@/components/ui/table/interfaces'
import SrcText from '@/components/ui/type/srcText'
import CodeBlock from '@/components/ui/type/codeBlock'

const code = [
'background: var(--color-wine-800-14);',
`import \* as P from '@/styles/parts'
// ... dentro do css de um componente do styled components:
const styPai = styled\.\d\iv\`
  \${ ({color1 = 'main'}) => P.doCssColor(color1, '125', 'c1') }
  \${ ({color1 = 'main'}) => P.doCssColor(color1, '125', 'c1', '-6') }
\``,
`--c1-125: var(--color-main-125);
--c1-125-6: var(--color-main-125-6);
/* usando no mesmo componente: */
background: var(--c1-125);
`,
`background: var(--c1-125); `,
]

const texts = [
  `As variáveis css podem ser chamadas em qualquer lugar do projeto, pois está sendo injetada no _app arquivo.`,
  `Não está sendo usado o tema do styled components para armazenar essas cores, está tudo em váriável css injetada globalmente devido a performance e a melhoria na experiência do desenvolvedor.`,
  `A tabela de cores mais abaixo é gerada automaticamente dependendo das cores configuradas no projeto.`,
  `E cada cor possui um atributo de opacidade não mostrada nessa tabela, exemplo:`,
  `14 é a opacidade menos opaca e 1 é a mais transparente, ou seja, vai de 1 a 14.`,
  `Para poder configurar as cores edite o arquivo: `, '/src/styles/makingColorsTheme/colors.ts',
  `. Lá irá poder configurar a cor 500 que é a cor escolhida e todos os tons e tons opacos dela será gerada automaticamente, podendo configurar quantas cores quiser.`,
  `Para criar variáveis de cores dinamicas pra usar em um componente styled components há um utilitário css no arquivo: `,
  ` que contém uma função auxiliar para criar variáveis de cores dinamicas para usar dentro de um contexto de um componente do styled-components. Para usar basta invocar essa função dentro de um componente sendo criado com styled-components da seguinte forma:`,
  `Isso gera as seguintes variáveis para uso apenas no contexto de um elemento pai e seus filhos:`,
  'use nos filhos de onde foi chamado a variável dinâmica:',
  'Isso facilita o desenvolvimento e a leitura do código, e também permite criar componentes que com apenas um atributo se possa mudar uma cor, e todo ele se adapta com suas tonalidades dessa cor, caso o componente use uma cor com várias tonalidades dela, dinamizando o uso dos componentes em diferentes cenários.',

]

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
      <HeadTitles>{'Usando as funções de cores configuradas no projeto'}</HeadTitles>
      <TextDefault> {texts[0]} <br /> {texts[1]} <br /> {texts[2]} <br /> {texts[3]} </TextDefault>
      <CodeBlock lang='css' text={code[0]} />
      <TextDefault> {texts[4]} </TextDefault>
      <TextDefault>
        {texts[5]} <SrcText alignment='flex-start'>{texts[6]}</SrcText> {texts[7]}
      </TextDefault>
      <TextDefault>
        {texts[8]} <SrcText alignment='flex-start'>{'src/styles/parts.tsx'}</SrcText> {texts[9]}
      </TextDefault>
      <CodeBlock lang='tsx' text={code[1]} />
      <TextDefault> {texts[10]} </TextDefault>
      <CodeBlock lang='css' text={code[2]} />
      <TextDefault> {texts[11]} </TextDefault>
      <CodeBlock lang='css' text={code[3]} />
      <TextDefault> {texts[12]} </TextDefault>
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