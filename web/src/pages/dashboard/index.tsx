import Header from '@/src/components/Header'
import { canSSRAuth } from '@/src/utils/canSSRAuth'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function Dashboard({ }: Props) {
  return (
    <>
      <Head>
        <title>Painel | DG Pizza</title>
      </Head>
      <div>
        <Header />
        <h1>Painel</h1>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})