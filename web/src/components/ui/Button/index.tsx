import { ClockCountdown, SpinnerGap } from "@phosphor-icons/react"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  children: ReactNode,
}

export function Button({ loading, children, ...rest }: Props) {
  return (
    <button
      className="max-w-xl bg-red-theme p-2 text-white rounded-lg transition-all hover:brightness-125 disabled:cursor-not-allowed"
      disabled={loading}
      {...rest}
    >
      {loading ? (<SpinnerGap size={16} className="animate-spin" />) : (children)}
    </button>
  )
}