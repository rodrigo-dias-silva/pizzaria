import React, { useState } from 'react'
import Head from 'next/head'

import { ArrowClockwise } from '@phosphor-icons/react'

import Header from '@/src/components/Header'
import { canSSRAuth } from '@/src/utils/canSSRAuth'
import { setupAPIClient } from '@/src/services/api'

import Modal from 'react-modal'
import ModalOrder from '@/src/components/ModalOrder'

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

export type OrderItemProps = {
  id: string,
  amount: number,
  order_id: string,
  product_id: string,
  product: {
    id: string,
    name: string,
    description: string,
    price: string,
    banner: string
  }
  order: {
    id: string,
    table: string | number,
    status: boolean,
    name: string | null
  }
}

export default function Dashboard({ orders }: HomeProps) {

  const [orderList, setOrderList] = useState(orders || [])

  const [modalItem, setModalItem] = useState<OrderItemProps[]>()
  const [modalVisible, setModalVisible] = useState(false)

  function handleCloseModalView() {
    setModalVisible(false)
  }

  async function handleOpenModalView(id: string) {

    const apiClient = setupAPIClient()

    const res = await apiClient.get('/order/detail', {
      params: {
        order_id: id
      }
    })

    setModalItem(res.data)
    setModalVisible(true)
  }

  Modal.setAppElement('#__next')

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
        {modalVisible && (
          <ModalOrder
            isOpen={modalVisible}
            onRequestClose={handleCloseModalView}
            order={modalItem}
          />
        )}
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