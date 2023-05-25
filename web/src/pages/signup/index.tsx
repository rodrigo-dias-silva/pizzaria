import { FormEvent, useContext, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import logoImg from '../../../public/logo.svg'
import { Input } from '../../components/ui/Input'
import { ButtonRed } from '../../components/ui/Button'
import { AuthContext } from '@/src/contexts/AuthContext'
import { toast } from 'react-toastify'

export default function SignUp() {
  const { signUp } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loadind, setLoadind] = useState(false)

  async function handleSignUp(e: FormEvent) {
    e.preventDefault()

    if (name === '' || email === '' || password === '') {
      toast.warning('Preencha todos os campos')
      return
    }

    setLoadind(true)

    let data = {
      name,
      email,
      password
    }

    await signUp(data)

    setLoadind(false)
  }

  return (
    <>
      <Head>
        <title>Faça o seu cadastro | DG Pizza</title>
      </Head>
      <div className='min-h-screen flex flex-col justify-center items-center'>
        <Image src={logoImg} alt='Logo DG Pizza' />

        <div className='mt-8 w-full max-w-xl flex flex-col items-center justify-center p-4'>
          <form
            className='w-11/12 flex flex-col'
            onSubmit={handleSignUp}
          >
            <Input
              type='text'
              placeholder='Nome da empresa'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type='text'
              placeholder='Digite um email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type='password'
              placeholder='Digite uma senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonRed
              type='submit'
              loading={loadind}
            >
              Cadastrar
            </ButtonRed>
          </form>

          <Link href='/' className='mt-4 text-white'>Já possuo uma conta</Link>
        </div>
      </div>
    </>
  )
}