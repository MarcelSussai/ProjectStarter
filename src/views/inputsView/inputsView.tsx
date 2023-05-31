import { InputCell, InputDefault } from '@/components/ui/inputs/styles'
import * as I from './interfaces'
import * as S from './styles'



export default function InputsView({

}: I.IInputsView) {

  return (
    <S.All>
      <S.ContainerInput> <InputDefault /> </S.ContainerInput>
      <S.ContainerInput> <InputCell /> </S.ContainerInput>
      <S.ContainerInput> <InputDefault color='greyAzure' /> </S.ContainerInput>
      <S.ContainerInput> <InputCell color='greyAzure' /> </S.ContainerInput>
    </S.All>
  )
}