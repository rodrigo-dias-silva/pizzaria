import { FormEvent, useState } from "react"
import Head from "next/head"

import Header from "@/src/components/Header"
import { Button } from "@/src/components/ui/Button"
import { Input } from "@/src/components/ui/Input"
import { setupAPIClient } from "@/src/services/api"
import { toast } from "react-toastify"

type Props = {}

export default function Category({ }: Props) {

  const [name, setName] = useState('')

  async function handleRegister(e: FormEvent) {
    e.preventDefault()

    if (name === '') {
      return
    }

    const apiClient = setupAPIClient()

    await apiClient.post('/category', {
      name: name
    })

    toast.success('Categoria cadastrada com sucesso!')

    setName('')
  }

  return (
    <>
      <Head>
        <title>DG Pizza | Nova categoria</title>
      </Head>
      <div>
        <Header />
        <main className="max-w-3xl my-16 px-8 flex justify-between flex-col">
          <h1 className="text-white text-4xl font-semibold">Cadastrar categorias</h1>

          <form className="flex flex-col my-4" onSubmit={handleRegister}>
            <Input
              placeholder="Cadastrar nova categoria"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Button children='Cadastrar' bgcolor="green" txtcolor="black" />
          </form>
        </main>
      </div>
    </>
  )
}