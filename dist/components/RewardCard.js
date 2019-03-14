'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('@emotion/styled');

var _styled2 = _interopRequireDefault(_styled);

var _emotion = require('emotion');

var _CardGiftcard = require('@material-ui/icons/CardGiftcard');

var _CardGiftcard2 = _interopRequireDefault(_CardGiftcard);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RewardCard = (0, _styled2.default)(function (_ref) {
  var className = _ref.className,
      title = _ref.title,
      image = _ref.image,
      description = _ref.description,
      point = _ref.point;
  return _react2.default.createElement(
    'div',
    { className: (0, _emotion.cx)('reward-card', className) },
    _react2.default.createElement(
      'div',
      { className: 'info' },
      image ? _react2.default.createElement('img', {
        src: image,
        className: 'preview-image',
        objectFit: 'cover',
        style: { width: 85, height: 85, borderRadius: 6 }
      }) : _react2.default.createElement('img', { className: 'preview-image' }),
      _react2.default.createElement(
        'div',
        { className: 'detail' },
        _react2.default.createElement(
          _Text2.default,
          { fontSize: 4, fontWeight: 600 },
          title || title === '' || 'ฟรี ของรางวัล 1 ชิ้น'
        ),
        _react2.default.createElement(
          _Text2.default,
          { fontSize: 3 },
          description || description === '' || 'เมื่อสะสมครบ 10 ดวง'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'action', py: 10 },
      _react2.default.createElement(_CardGiftcard2.default, null),
      _react2.default.createElement(
        _Text2.default,
        { className: 'pumpkin-text', fontSize: 4, fontWeight: 500 },
        point || point === '' ? '\u0E43\u0E0A\u0E49 ' + point + ' \u0E14\u0E27\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E25\u0E01' : 'แลก'
      )
    )
  );
})(function (_ref2) {
  var theme = _ref2.theme,
      primaryColor = _ref2.primaryColor;
  return {
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
  };
});

RewardCard.propTypes = {
  primaryColor: _propTypes2.default.string
};

exports.default = RewardCard;