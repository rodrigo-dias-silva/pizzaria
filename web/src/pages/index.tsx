import Head from 'next/head'
import logoImg from '../../public/logo.svg'
import Image from 'next/image'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>DG Pizza | Faça o login</title>
      </Head>
      <div className='min-h-screen flex flex-col justify-center items-center'>
        <Image src={logoImg} alt='Logo DG Pizza' />

        <div className='mt-8 w-full max-w-xl flex flex-col items-center justify-center p-4'>
          <form className='w-11/12 flex flex-col'>
            <Input
              type='text'
              placeholder='Digite seu email'
            />
            <Input
              type='password'
              placeholder='Digite sua senha'
            />
            <Button
              type='submit'
              loading={false}
            >
              Acessar
            </Button>
          </form>

          <a className='mt-4 text-white' href='#'>Nao possui uma conta?</a>
        </div>
      </div>
    </>
  )
}