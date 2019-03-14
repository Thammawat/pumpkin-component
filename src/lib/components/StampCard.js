import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { cx } from 'emotion'
import Text from './Text'

const StampCard = styled(
  ({
    cover,
    logo,
    name,
    description,
    point,
    textColor,
    className,
    label,
    withLabel
  }) => (
    <div>
      {/* {withLabel && (
        <Text
          className={'label'}
          color={'#6d6d6e'}
          fontSize={'12px'}
          fontWeight={400}
          style={{ paddingBottom: '12px' }}
        >
          {label}
        </Text>
      )} */}
      <div className={cx('stamp-card', className)}>
        <img className={'image'} src={cover} />
        <div className={'gradient'} />
        <div className={'info'}>
          <img className={'logo'} src={logo} />
          <div className={'content'}>
            <Text className={'name'}>{name.toUpperCase()}</Text>
            <Text className={'description'}>{description}</Text>
          </div>
          <div className={'divider'} />
          <div className={'point'}>
            <Text
              className={'value'}
              color={textColor}
              fontSize={6}
              fontWeight={700}
            >
              {point}
            </Text>
            <Text
              className={'pump'}
              color={'grey'}
              fontSize={2}
              fontWeight={500}
            >
              PUMP
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
)(({ theme, gradientColor }) => ({
  backgroundColor:
    gradientColor === '#000000' ? 'rgba(0,0,0,0.6)' : 'transparent',
  borderRadius: 12,
  // boxShadow: theme.get('globalShadows.lightShadow'),
  overflow: 'hidden',
  height: 225,
  maxWidth: 425,
  minWidth: 343,
  position: 'relative',
  '.image': {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
  '.gradient': {
    height: '75%',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    background: `linear-gradient(rgba(0,0,0,0) ,${gradientColor})`
  },
  '.info': {
    position: 'absolute',
    padding: '20px 24px',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '.logo': {
      width: 50,
      height: 50,
      borderRadius: 12
    },
    '.content': {
      flex: 1,
      paddingLeft: 24,
      textAlign: 'left',
      fontFamily: 'thai-sans-neue',
      '.name': {
        fontSize: 24,
        fontWeight: 500,
        color: 'grey'
      },
      '.description': {
        fontSize: 20,
        marginTop: -7,
        color: 'grey',
        fontWeight: 500
      }
    }
  },
  '.divider': {
    width: 1,
    height: 40,
    backgroundColor: 'darkgrey'
  },
  '.point': {
    paddingLeft: 20,
    '.value': {
      fontSize: 48,
      fontWeight: 700,
      marginTop: -10,
      textAlign: 'right',
      fontFamily: 'thai-sans-neue'
    },
    '.pump': {
      fontFamily: 'thai-sans-neue',
      fontWeight: 500,
      marginTop: -20,
      textAlign: 'right'
    }
  }
}))

StampCard.propTypes = {
  cover: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  textColor: PropTypes.string,
  point: PropTypes.number,
  gradientColor: PropTypes.string,
  className: PropTypes.string,
  withLabel: PropTypes.bool
}
StampCard.propTypes = {
  withLabel: false
}

export default StampCard
