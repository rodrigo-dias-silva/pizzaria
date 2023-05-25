import React, { useState } from 'react'
import Head from 'next/head'

import { ArrowClockwise } from '@phosphor-icons/react'

import Header from '@/src/components/Header'
import { canSSRAuth } from '@/src/utils/canSSRAuth'
import { setupAPIClient } from '@/src/services/api'

type OrderProps = {
  id: string,
  table: string | number,
  status: boolean,
  draft: boolean,
  name: string | null
}

interface HomeProps {
  orders: OrderProps[]
}

export default function Dashboard({ orders }: HomeProps) {

  const [orderList, setOrderList] = useState(orders || [])

  function handleOpenModalView(id: string) {
    alert('clicou' + id)
  }

  return (
    <>
      <Head>
        <title>Painel | DG Pizza</title>
      </Head>
      <div>
        <Header />
        <main className="max-w-3xl my-16 px-8 flex justify-between m-auto flex-col gap-4">
          <div className='flex gap-4'>
            <h1 className="text-white text-3xl font-semibold">Últimos pedidos</h1>
            <button>
              <ArrowClockwise size={24} color='#3fffa3' />
            </button>
          </div>

          <article className='flex flex-col my-4'>
            {orderList.map(item => (
              <section key={item.id} className='flex bg-dark-900 items-center rounded overflow-hidden'>
                <button
                  className='text-xl flex gap-4 text-white h-14 items-center w-full'
                  onClick={() => handleOpenModalView(item.id)}
                >
                  <div className='w-2 bg-green-theme h-full' />
                  <span>Mesa {item.table}</span>
                </button>
              </section>
            ))}
          </article>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  const apiClient = setupAPIClient(ctx)

  const res = await apiClient.get('/orders')

  return {
    props: {
      orders: res.data
    }
  }
})