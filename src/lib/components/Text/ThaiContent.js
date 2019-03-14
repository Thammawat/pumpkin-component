import React from 'react'
import Text from './Text'

const ThaiContent = (props) => {
  return (
    <Text
      fontFamily={'thai'}
      letterSpacing={'1px'}
      fontSize={3}
      {...props}
    />
  )
}

export default ThaiContent
