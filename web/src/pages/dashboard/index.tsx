import { canSSRAuth } from '@/src/utils/canSSRAuth'
import React from 'react'

type Props = {}

export default function Dashboard({ }: Props) {
  return (
    <div>Dashboard</div>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})