import { ChangeEvent, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { UploadSimple } from '@phosphor-icons/react'

import { canSSRAuth } from '@/src/utils/canSSRAuth'

import Header from '@/src/components/Header'
import { ButtonGreen } from '@/src/components/ui/Button'
import { Input, TextArea } from '@/src/components/ui/Input'
import { setupAPIClient } from '@/src/services/api'

type ItemProps = {
  id: string,
  name: string
}

interface CategoryProps {
  categoryList: ItemProps[]
}

export default function Product({ categoryList }: CategoryProps) {

  const [avatarUrl, setAvatarUrl] = useState('')
  const [imgAvatar, setImgAvatar] = useState(null)
  const [categories, setCategories] = useState(categoryList || [])
  const [categorySelected, setCategorySelected] = useState(0)

  function handleFile(e: ChangeEvent<HTMLInputElement>) {

    const image = e.target.files[0]

    if (!image) {
      return
    }

    if (image.type === 'image/jpeg' || image.type === 'image/png' || image.type === 'image/gif') {

      setImgAvatar(image)
      setAvatarUrl(URL.createObjectURL(image))
    }
  }

  function handleChangeCategory(e) {

    setCategorySelected(e.target.value)

  }

  return (
    <>
      <Head>
        <title>Novo produto | DG Pizza</title>
      </Head>
      <div>
        <Header />
        <main className="max-w-3xl my-16 px-8 flex justify-between flex-col m-auto gap-4">
          <h1 className="text-white text-4xl font-semibold">Novo produto</h1>

          <form className="flex flex-col my-4 w-full">

            <label className='group w-full h-60 bg-dark-900 mb-4 rounded-lg flex justify-center items-center border border-gray-500 cursor-pointer overflow-hidden'>
              <span className='z-10 absolute opacity-50 group-hover:scale-125 group-hover:opacity-90 transition-all duration-700'>
                <UploadSimple size={'3rem'} color='#fff' />
              </span>

              <input type="file" accept='image/png, image/jpeg, image/gif' className='hidden' onChange={handleFile} />

              {
                avatarUrl && (
                  <Image
                    src={avatarUrl}
                    alt="Foto do produto"
                    className='w-full h-full object-cover'
                    width={250}
                    height={250}
                  />
                )
              }
            </label>

            <select
              className="mb-4 h-10 rounded-lg text-white bg-dark-900 px-4 border border-gray-500"
              value={categorySelected}
              onChange={handleChangeCategory}
            >
              {categories.map((item, index) => {
                return (
                  <option key={item.id} value={index}>
                    {item.name}
                  </option>
                )
              })}
            </select>

            <Input placeholder='Nome do produto' />
            <Input placeholder='Valor' />
            <TextArea placeholder='Descrição do produto' />

            <ButtonGreen children='Cadastrar' />
          </form>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)

  const res = await apiClient.get('/categories')


  return {
    props: {
      categoryList: res.data
    }
  }
})