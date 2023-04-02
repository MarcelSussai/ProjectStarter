'use client'
import HeadDefault from '@/components/head'
import Checkbox from '@/components/ui/checkboxes/checkbox'
import { Main } from '@/components/ui/containers/main'
import { useEffect, useState } from 'react'


export default function Home() {
  const [selectAll, setSelecAll] = useState<boolean>(false)

  useEffect(() => {console.log(selectAll)}, [selectAll])


  return (
    <>
      <HeadDefault title='Home' />
      <Main>
        <Checkbox
          checked={selectAll} text={'Checar'}
          horizontalAlignment='center'
          onChange={() => setSelecAll(!selectAll)}
          color='grey' fit noBg
        />
      </Main>
    </>
  )
}
