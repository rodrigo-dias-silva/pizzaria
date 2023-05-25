import { SpinnerGap } from "@phosphor-icons/react"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  children: ReactNode,
}

function ButtonRed({ loading, children, ...rest }: Props) {
  return (
    <button
      className='w-full h-10 bg-red-theme flex justify-center items-center p-2 text-white font-semibold text-xl rounded-lg transition-all hover:brightness-125 disabled:cursor-not-allowed'
      disabled={loading}
      {...rest}
    >
      {loading ? (<SpinnerGap size={16} className="animate-spin" />) : (children)}
    </button>
  )
}

function ButtonGreen({ loading, children, ...rest }: Props) {
  return (
    <button
      className='w-full h-10 bg-green-theme flex justify-center items-center p-2 text-black font-semibold text-xl rounded-lg transition-all hover:brightness-125 disabled:cursor-not-allowed'
      disabled={loading}
      {...rest}
    >
      {loading ? (<SpinnerGap size={16} className="animate-spin" />) : (children)}
    </button>
  )
}

export { ButtonGreen, ButtonRed }