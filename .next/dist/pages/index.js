'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/laurencet/lighthouse/how-much-bitcoin/pages/index.js?entry';


var PostLink = function PostLink(props) {
    return _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement(_link2.default, { href: '/post?title=' + props.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, props.title)));
};

exports.default = function () {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, 'Adrien\'s blog'), _react2.default.createElement('ul', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(PostLink, { title: 'Hello Next.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement(PostLink, { title: 'Learning Next.js + React is the bomb', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }), _react2.default.createElement(PostLink, { title: 'Deploy apps with Zeit', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiLCJQb3N0TGluayIsInByb3BzIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQUMsT0FBRDsyQkFDYixjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUMsZ0NBQUssdUJBQXFCLE1BQTNCLEFBQWlDO3NCQUFqQzt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsYUFISyxBQUNiLEFBQ0ksQUFDSSxBQUFVO0FBSHRCLEFBUUE7O2tCQUFlLFlBQUE7MkJBQ1gsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsbUNBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEscUNBQ0ksQUFBQyxZQUFTLE9BQVYsQUFBZ0I7c0JBQWhCO3dCQURKLEFBQ0ksQUFDQTtBQURBO3NDQUNBLEFBQUMsWUFBUyxPQUFWLEFBQWdCO3NCQUFoQjt3QkFGSixBQUVJLEFBQ0E7QUFEQTtzQ0FDQSxBQUFDLFlBQVMsT0FBVixBQUFnQjtzQkFBaEI7d0JBTkcsQUFDWCxBQUVJLEFBR0k7QUFBQTs7QUFOWiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGF1cmVuY2V0L2xpZ2h0aG91c2UvaG93LW11Y2gtYml0Y29pbiJ9