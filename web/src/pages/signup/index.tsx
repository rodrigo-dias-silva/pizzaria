import Head from 'next/head'
import logoImg from '../../../public/logo.svg'
import Image from 'next/image'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import Link from 'next/link'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>DG Pizza | Faça o seu cadastro</title>
      </Head>
      <div className='min-h-screen flex flex-col justify-center items-center'>
        <Image src={logoImg} alt='Logo DG Pizza' />

        <div className='mt-8 w-full max-w-xl flex flex-col items-center justify-center p-4'>
          <form className='w-11/12 flex flex-col'>
            <Input
              type='text'
              placeholder='Nome da empresa'
            />
            <Input
              type='text'
              placeholder='Digite um email'
            />
            <Input
              type='password'
              placeholder='Digite uma senha'
            />
            <Button
              type='submit'
              loading={false}
            >
              Cadastrar
            </Button>
          </form>

          <Link href='/' className='mt-4 text-white'>Já possuo uma conta</Link>
        </div>
      </div>
    </>
  )
}