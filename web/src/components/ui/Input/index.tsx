import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export function Input({ ...rest }: Props) {
  return (
    <input
      type="text"
      className="mb-4 h-10 rounded-lg bg-dark-900 text-white p-4 border border-gray-500 placeholder:opacity-50"
      {...rest}
    />
  )
}

export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <textarea
      className="mb-4 h-10 rounded-lg bg-dark-900 text-white p-4 border border-gray-500 placeholder:opacity-50"
      {...rest}
    />
  )
}