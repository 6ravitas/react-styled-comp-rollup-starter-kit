'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 4em;\n  background: papayawhip;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Title = styled.h1(_templateObject()); // Create a Wrapper component that'll render a <section> tag with some styles

var Wrapper = styled.section(_templateObject2());

var Example = function Example() {
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Title, null, "Hello World!"));
};

module.exports = Example;
//# sourceMappingURL=bundle.js.map
