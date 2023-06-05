import React, { useEffect } from 'react'

type Props = {
  count: number
}

const ComponentA = (props: Props) => {
  useEffect(() => {
    console.log(props.count)
    const test = setTimeout(() => {

    }, 300)

    return () => {
      clearTimeout(test)

    }
  }, [props.count])
  return (
    <div>ComponentA: {props.count}</div>
  )
}

export default ComponentA