'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _ThaiHeading = require('./ThaiHeading');

var _ThaiHeading2 = _interopRequireDefault(_ThaiHeading);

var _ThaiContent = require('./ThaiContent');

var _ThaiContent2 = _interopRequireDefault(_ThaiContent);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Text2.default.ThaiHeading = _ThaiHeading2.default;
_Text2.default.ThaiContent = _ThaiContent2.default;
_Text2.default.Heading = _Heading2.default;

exports.default = _Text2.default;