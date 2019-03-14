import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { cx } from 'emotion'
import CardGiftcard from '@material-ui/icons/CardGiftcard'
import Text from './Text'

const RewardCard = styled(({ className, title, image, description, point }) => (
  <div className={cx('reward-card', className)}>
    <div className={'info'}>
      {image ? (
        <img
          src={image}
          className={'preview-image'}
          objectFit={'cover'}
          style={{ width: 85, height: 85, borderRadius: 6 }}
        />
      ) : (
        <img className={'preview-image'} />
      )}
      <div className={'detail'}>
        <Text fontSize={4} fontWeight={600}>
          {title || title === '' || 'ฟรี ของรางวัล 1 ชิ้น'}
        </Text>
        <Text fontSize={3}>
          {description || description === '' || 'เมื่อสะสมครบ 10 ดวง'}
        </Text>
      </div>
    </div>
    <div className={'action'} py={10}>
      {/* block middle center */}
      <CardGiftcard />
      <Text className={'pumpkin-text'} fontSize={4} fontWeight={500}>
        {point || point === '' ? `ใช้ ${point} ดวงในการแลก` : 'แลก'}
      </Text>
    </div>
  </div>
))(({ theme, primaryColor }) => ({
  width: 425,
  borderRadius: 12,
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 20px 0px',
  overflow: 'hidden',
  '.preview-image': {
    height: 85,
    width: 85,
    borderRadius: 6,
    opacity: 0
  },
  '.pumpkin-image': {
    height: 85,
    width: 85,
    borderRadius: 6
  },
  '.info': {
    padding: 15,
    display: 'flex',
    '.detail': {
      paddingLeft: 15,
      flex: 1,
      textAlign: 'left',
      '.pumpkin-text': {}
    }
  },
  '.action': {
    backgroundColor: primaryColor,
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      color: '#ffffff'
    },
    '.pumpkin-text': {
      marginLeft: 10,
      color: 'white',
      marginTop: 0,
      marginBottom: 0
    }
  }
}))

RewardCard.propTypes = {
  primaryColor: PropTypes.string
}

export default RewardCard
