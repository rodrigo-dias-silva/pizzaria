import Header from '@/src/components/Header'
import { Button } from '@/src/components/ui/Button'
import { Input, TextArea } from '@/src/components/ui/Input'
import { canSSRAuth } from '@/src/utils/canSSRAuth'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function Product({ }: Props) {
  return (
    <>
      <Head>
        <title>Novo produto | DG Pizza</title>
      </Head>
      <div>
        <Header />
        <main className="max-w-3xl my-16 px-8 flex justify-between flex-col">
          <h1 className="text-white text-4xl font-semibold">Novo produto</h1>

          <form className="flex flex-col my-4">
            <select className="mb-4 h-10 rounded-lg text-white bg-dark-900 px-4 border border-gray-500">
              <option>Bebida</option>
              <option>Pizza</option>
            </select>

            <Input placeholder='Nome do produto' />
            <Input placeholder='Valor' />
            <TextArea placeholder='Descrição do produto' />

            <Button bgcolor='green' txtcolor='black' children='Cadastrar' />
          </form>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})