'use client'
import HeadDefault from '@/components/head'
import Checkbox from '@/components/ui/checkboxes/checkbox'
import { Main } from '@/components/ui/containers/main'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function Home() {


  return (
    <>
      <HeadDefault title='Home' />
      <Main>
        <Link href='/projectStarter'> ProjectStarter </Link>
      </Main>
    </>
  )
}
