System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/icons", "pragmate-ui@0.1.2/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ListEntries, __beyond_pkg, hmr;
  _export("ListEntries", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi012Icons) {
      dependency_3 = _pragmateUi012Icons;
    }, function (_pragmateUi012Empty) {
      dependency_4 = _pragmateUi012Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bg/auth-models", null], ["@bgroup/jview", "1.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/widgets", "0.1.6"], ["@bgroup/data-model", "1.0.11"], ["@bgroup/ui", "0.0.38"], ["chart.js", "4.4.4"], ["dayjs", "1.11.13"], ["dotenv", "16.4.5"], ["framer-motion", "6.5.1"], ["googleapis", "120.0.0"], ["mysql2", "3.11.0"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prism-react-renderer", "2.4.0"], ["prismjs", "1.29.0"], ["react-is", "18.3.1"], ["react-select", "5.8.0"], ["sequelize", "6.37.3"], ["socket.io-client", "4.7.5"], ["swiper", "11.1.12"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["@bg/jadmin", "0.0.1"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/jadmin@0.0.1/list"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/empty', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/list');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./columns
      *************************/
      ims.set('./columns', {
        hash: 3422565007,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Columns = Columns;
          var _react = require("react");
          function Columns({
            item,
            heads,
            keys
          }) {
            const liItems = item.map(item => _react.default.createElement("ul", {
              className: "list__item",
              key: item.id
            }, keys.map(key => _react.default.createElement("li", {
              key: key
            }, _react.default.createElement("span", null, item[key] ?? "vacio")))));
            const columns = heads.map((head, index) => _react.default.createElement("div", {
              className: "list__column",
              key: index
            }, _react.default.createElement("strong", {
              className: "list__column-header"
            }, head), liItems.map(liItem => liItem.props.children[index + 1])));
            return _react.default.createElement("div", {
              className: "list__container"
            }, columns);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./content
      *************************/

      ims.set('./content', {
        hash: 854270848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          var _react = require("react");
          var _context = require("./context");
          var _item = require("./item");
          function Content() {
            const {
              dataHead,
              entries,
              keys
            } = (0, _context.useListContext)();
            const head = dataHead.map(head => _react.default.createElement("th", {
              key: head
            }, head));
            return _react.default.createElement("section", {
              className: "container__list"
            }, _react.default.createElement("table", {
              className: "list__table"
            }, _react.default.createElement("thead", null, _react.default.createElement("tr", {
              className: "list__head"
            }, head)), _react.default.createElement("tbody", null, _react.default.createElement(_item.Item, {
              item: entries,
              keys: keys
            }))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3315519978,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var _react = require("react");
          const ListContext = exports.ListContext = _react.default.createContext({});
          const useListContext = () => _react.default.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /**********************
      INTERNAL MODULE: ./head
      **********************/

      ims.set('./head', {
        hash: 1748257069,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Head = Head;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Head({
            title
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "list__header"
            }, _react.default.createElement("div", {
              className: "title"
            }, _react.default.createElement("div", {
              className: "content-icon"
            }, _react.default.createElement(_icons.Icon, {
              icon: "user",
              className: "md"
            })), _react.default.createElement("h3", {
              className: "list__h3"
            }, title))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1555518960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListEntries = ListEntries;
          var _react = require("react");
          var _view = require("./view");
          var _context = require("./context");
          /* bundle */
          function ListEntries(props) {
            const {
              dataHead,
              entries,
              title,
              keys
            } = props;
            const value = {
              dataHead,
              entries,
              title,
              keys
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ListContext.Provider, {
              value: value
            }, _react.default.createElement(_view.View, null)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1382685368,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          function Item({
            item,
            keys
          }) {
            const entries = item.map((item, index) => _react.default.createElement("tr", {
              className: "list__item",
              key: index
            }, keys.map(key => _react.default.createElement("td", {
              key: key
            }, item[key] ?? "vacio"))));
            return _react.default.createElement(_react.default.Fragment, null, entries);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 3210019024,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _context = require("./context");
          var _content = require("./content");
          var _head = require("./head");
          function View() {
            const {
              entries,
              title
            } = (0, _context.useListContext)();
            const control = !entries.length ? _react.default.createElement(_empty.Empty, {
              className: "empty",
              text: "Non hay datos asociados",
              icon: "circle-exclamation"
            }) : _react.default.createElement(_content.Content, null);
            return _react.default.createElement("div", {
              className: "container-list"
            }, _react.default.createElement(_head.Head, {
              title: title
            }), control);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ListEntries",
        "name": "ListEntries"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ListEntries') && _export("ListEntries", ListEntries = require ? require('./index').ListEntries : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29sdW1ucyIsIml0ZW0iLCJoZWFkcyIsImtleXMiLCJsaUl0ZW1zIiwibWFwIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJrZXkiLCJpZCIsImNvbHVtbnMiLCJoZWFkIiwiaW5kZXgiLCJsaUl0ZW0iLCJwcm9wcyIsImNoaWxkcmVuIiwiX2NvbnRleHQiLCJfaXRlbSIsIkNvbnRlbnQiLCJkYXRhSGVhZCIsImVudHJpZXMiLCJ1c2VMaXN0Q29udGV4dCIsIkl0ZW0iLCJMaXN0Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29ucyIsIkhlYWQiLCJ0aXRsZSIsIkZyYWdtZW50IiwiSWNvbiIsImljb24iLCJfdmlldyIsIkxpc3RFbnRyaWVzIiwidmFsdWUiLCJQcm92aWRlciIsIlZpZXciLCJfZW1wdHkiLCJfY29udGVudCIsIl9oZWFkIiwiY29udHJvbCIsImxlbmd0aCIsIkVtcHR5IiwidGV4dCJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NvbHVtbnMudHN4IiwiL2NvZGUvdHMvY29udGVudC50c3giLCIvY29kZS90cy9jb250ZXh0LnRzIiwiL2NvZGUvdHMvaGVhZC50c3giLCIvY29kZS90cy9pbmRleC50c3giLCIvY29kZS90cy9pdGVtLnRzeCIsIi9jb2RlL3RzL3ZpZXcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVVDLE9BQU9BLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxLQUFLO1lBQUVDO1VBQUksQ0FBRTtZQUMzQyxNQUFNQyxPQUFPLEdBQUdILElBQUksQ0FBQ0ksR0FBRyxDQUFFSixJQUFJLElBQzVCSCxNQUFB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