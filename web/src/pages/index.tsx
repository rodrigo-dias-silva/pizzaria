import { FormEvent, useContext, useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import logoImg from '../../public/logo.svg'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

import { AuthContext } from '../contexts/AuthContext'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    signIn({ email, password })
  }

  return (
    <>
      <Head>
        <title>DG Pizza | Faça o login</title>
      </Head>
      <div className='min-h-screen flex flex-col justify-center items-center'>
        <Image src={logoImg} alt='Logo DG Pizza' />

        <div className='mt-8 w-full max-w-xl flex flex-col items-center justify-center p-4'>
          <form className='w-11/12 flex flex-col' onSubmit={handleLogin}>
            <Input
              type='text'
              placeholder='Digite seu email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type='password'
              placeholder='Digite sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              loading={false}
            >
              Acessar
            </Button>
          </form>

          <Link href='/signup' className='mt-4 text-white'>Nao possui uma conta?</Link>
        </div>
      </div>
    </>
  )
}