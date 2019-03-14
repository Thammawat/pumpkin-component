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

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StampCard = (0, _styled2.default)(function (_ref) {
  var cover = _ref.cover,
      logo = _ref.logo,
      name = _ref.name,
      description = _ref.description,
      point = _ref.point,
      textColor = _ref.textColor,
      className = _ref.className,
      label = _ref.label,
      withLabel = _ref.withLabel;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: (0, _emotion.cx)('stamp-card', className) },
      _react2.default.createElement('img', { className: 'image', src: cover }),
      _react2.default.createElement('div', { className: 'gradient' }),
      _react2.default.createElement(
        'div',
        { className: 'info' },
        _react2.default.createElement('img', { className: 'logo', src: logo }),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            _Text2.default,
            { className: 'name' },
            name.toUpperCase()
          ),
          _react2.default.createElement(
            _Text2.default,
            { className: 'description' },
            description
          )
        ),
        _react2.default.createElement('div', { className: 'divider' }),
        _react2.default.createElement(
          'div',
          { className: 'point' },
          _react2.default.createElement(
            _Text2.default,
            {
              className: 'value',
              color: textColor,
              fontSize: 6,
              fontWeight: 700
            },
            point
          ),
          _react2.default.createElement(
            _Text2.default,
            {
              className: 'pump',
              color: 'grey',
              fontSize: 2,
              fontWeight: 500
            },
            'PUMP'
          )
        )
      )
    )
  );
})(function (_ref2) {
  var theme = _ref2.theme,
      gradientColor = _ref2.gradientColor;
  return {
    backgroundColor: gradientColor === '#000000' ? 'rgba(0,0,0,0.6)' : 'transparent',
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
      background: 'linear-gradient(rgba(0,0,0,0) ,' + gradientColor + ')'
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
  };
});

StampCard.propTypes = {
  cover: _propTypes2.default.string,
  logo: _propTypes2.default.string,
  name: _propTypes2.default.string,
  description: _propTypes2.default.string,
  textColor: _propTypes2.default.string,
  point: _propTypes2.default.number,
  gradientColor: _propTypes2.default.string,
  className: _propTypes2.default.string,
  withLabel: _propTypes2.default.bool
};
StampCard.propTypes = {
  withLabel: false
};

exports.default = StampCard;