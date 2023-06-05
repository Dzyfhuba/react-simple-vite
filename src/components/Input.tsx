import React, { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  test1?: string
  test2?: string
  test3?: string
}

const Input = (props: Props) => {
  return (
    <input {...props}  className={'asda ' + props.className} />
  )
}

export default Input