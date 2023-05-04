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
      <div>
        <Image src={logoImg} alt='Logo DG Pizza' />

        <div>
          <form>
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
        </div>
      </div>
    </>
  )
}