import React from 'react'
import omit from 'lodash/omit'
import PropTypes from 'prop-types'
import {
  color,
  fontWeight,
  fontSize,
  letterSpacing,
  textAlign,
  space,
  fontFamily,
  lineHeight,
  maxWidth
} from 'styled-system'
import { cx } from 'emotion'
import styled from '@emotion/styled'

import Typography from '@material-ui/core/Typography'

const Text = styled(
  ({
    className,
    inline,
    link,
    messageId,
    values,
    children,
    danger,
    success,
    ...props
  }) => (
    <Typography
      className={cx(
        'pumpkin-text',
        inline && 'inline',
        link && 'link',
        danger && 'danger',
        success && 'success',
        className
      )}
      {...omit(props, [
        'color',
        'textAlign',
        'danger',
        'lineHeight',
        'whiteSpace'
      ])}
    >
      {children}
    </Typography>
  )
)`
  &.pumpkin-text.inline {
    display: inline-block;
  }
  &.pumpkin-text.link {
    text-decoration: underline;
  }
  &.pumpkin-text {
    ${fontFamily}
    ${color}
    ${fontWeight}
    ${fontSize}
    ${letterSpacing}
    ${textAlign}
    ${space}
    ${lineHeight}
    ${maxWidth}
  }
`

Text.propTypes = {
  messageId: PropTypes.string,
  whiteSpace: PropTypes.string,
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'white',
      'extraLightGrey',
      'lightGrey',
      'grey',
      'darkGrey',
      'black',
      'primary',
      'secondary',
      'inherit'
    ]),
    PropTypes.string
  ]),
  fontFamily: PropTypes.oneOf(['thai']),
  fontWeight: PropTypes.oneOfType([
    PropTypes.oneOf([
      'ultraLight',
      'extraLight',
      'light',
      'regular',
      'semiBold',
      'bold',
      'extraBold',
      'ultraBold',
      'black'
    ]),
    PropTypes.number
  ]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  inline: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  link: PropTypes.bool
}
Text.displayName = 'Text'
Text.defaultProps = {
  messageId: '',
  color: 'black',
  danger: false,
  inline: false,
  success: false,
  link: false,
  fontFamily: 'thai-sans-neue'
}

export default Text
