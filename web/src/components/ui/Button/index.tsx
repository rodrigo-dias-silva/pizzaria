import { SpinnerGap } from "@phosphor-icons/react"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  children: ReactNode,
  bgcolor: string,
  txtcolor: string
}

export function Button({ loading, children, bgcolor, txtcolor, ...rest }: Props) {
  return (
    <button
      className={`w-full h-10 bg-${bgcolor}-theme flex justify-center items-center p-2 text-${txtcolor} font-semibold text-xl rounded-lg transition-all hover:brightness-125 disabled:cursor-not-allowed`}
      disabled={loading}
      {...rest}
    >
      {loading ? (<SpinnerGap size={16} className="animate-spin" />) : (children)}
    </button>
  )
}