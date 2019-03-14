'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  &.pumpkin-text.inline {\n    display: inline-block;\n  }\n  &.pumpkin-text.link {\n    text-decoration: underline;\n  }\n  &.pumpkin-text {\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  }\n'], ['\n  &.pumpkin-text.inline {\n    display: inline-block;\n  }\n  &.pumpkin-text.link {\n    text-decoration: underline;\n  }\n  &.pumpkin-text {\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledSystem = require('styled-system');

var _emotion = require('emotion');

var _styled = require('@emotion/styled');

var _styled2 = _interopRequireDefault(_styled);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = (0, _styled2.default)(function (_ref) {
  var className = _ref.className,
      inline = _ref.inline,
      link = _ref.link,
      messageId = _ref.messageId,
      values = _ref.values,
      children = _ref.children,
      danger = _ref.danger,
      success = _ref.success,
      props = _objectWithoutProperties(_ref, ['className', 'inline', 'link', 'messageId', 'values', 'children', 'danger', 'success']);

  return _react2.default.createElement(
    _Typography2.default,
    _extends({
      className: (0, _emotion.cx)('pumpkin-text', inline && 'inline', link && 'link', danger && 'danger', success && 'success', className)
    }, (0, _omit2.default)(props, ['color', 'textAlign', 'danger', 'lineHeight', 'whiteSpace'])),
    children
  );
})(_templateObject, _styledSystem.fontFamily, _styledSystem.color, _styledSystem.fontWeight, _styledSystem.fontSize, _styledSystem.letterSpacing, _styledSystem.textAlign, _styledSystem.space, _styledSystem.lineHeight, _styledSystem.maxWidth);

Text.propTypes = {
  messageId: _propTypes2.default.string,
  whiteSpace: _propTypes2.default.string,
  color: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['white', 'extraLightGrey', 'lightGrey', 'grey', 'darkGrey', 'black', 'primary', 'secondary', 'inherit']), _propTypes2.default.string]),
  fontFamily: _propTypes2.default.oneOf(['thai']),
  fontWeight: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['ultraLight', 'extraLight', 'light', 'regular', 'semiBold', 'bold', 'extraBold', 'ultraBold', 'black']), _propTypes2.default.number]),
  fontSize: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  letterSpacing: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  textAlign: _propTypes2.default.oneOf(['left', 'center', 'right', 'justify']),
  lineHeight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string,
  inline: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  link: _propTypes2.default.bool
};
Text.displayName = 'Text';
Text.defaultProps = {
  messageId: '',
  color: 'black',
  danger: false,
  inline: false,
  success: false,
  link: false,
  fontFamily: 'thai-sans-neue'
};

exports.default = Text;