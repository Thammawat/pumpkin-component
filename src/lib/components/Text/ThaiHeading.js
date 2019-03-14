import React from 'react'
import Text from './Text'

const ThaiHeading = (props) => {
  return (
    <Text
      fontFamily={'thai'}
      letterSpacing={'1px'}
      fontSize={4}
      fontWeight={'bold'}
      {...props}
    />
  )
}

export default ThaiHeading
