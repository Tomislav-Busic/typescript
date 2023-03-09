import React, { ReactElement } from 'react'

type HeadingProps = {
    title: string
}

const Header = ({title}: HeadingProps): ReactElement => {
  return (
    <div>{title}</div>
  )
}

export default Header