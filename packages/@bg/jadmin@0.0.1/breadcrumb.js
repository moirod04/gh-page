System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/link", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.4/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, BreadCrumb, __beyond_pkg, hmr;
  _export("BreadCrumb", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi012Link) {
      dependency_3 = _pragmateUi012Link;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_5 = _beyondJsReact18Widgets104Hooks;
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
          "vspecifier": "@bg/jadmin@0.0.1/breadcrumb"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/link', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 573213650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumb = BreadCrumb;
          var React = require("react");
          var _link = require("pragmate-ui/link");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /* bundle */
          function BreadCrumb(props) {
            const {
              title,
              items,
              border,
              className,
              children
            } = props;
            let cls = `jadmin-page-header${className ? ` ${className}` : ""}`;
            if (border) cls += " border-header";
            const [currentRouting, setCurrentRouting] = React.useState(_routing.routing.uri.pathname);
            (0, _hooks.useBinder)([_routing.routing], () => setCurrentRouting(_routing.routing.uri.pathname));
            let breadcrumbOutput = [];
            if (items) {
              breadcrumbOutput = items.map(([link, label]) => {
                const isChecked = link === _routing.routing.uri.pathname ? "breadcrumbs__item--checked" : "breadcrumbs__item";
                return React.createElement("li", {
                  key: `${link} ${label}`
                }, React.createElement(_link.Link, {
                  className: isChecked,
                  href: link
                }, label));
              });
            }
            return React.createElement("header", {
              className: cls
            }, React.createElement("h2", null, title), breadcrumbOutput.length > 0 && React.createElement("ul", {
              className: "breadcrumb"
            }, breadcrumbOutput), React.createElement("div", null, children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./type
      **********************/

      ims.set('./type', {
        hash: 2947574685,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "BreadCrumb",
        "name": "BreadCrumb"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BreadCrumb') && _export("BreadCrumb", BreadCrumb = require ? require('./index').BreadCrumb : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbGluayIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiQnJlYWRDcnVtYiIsInByb3BzIiwidGl0bGUiLCJpdGVtcyIsImJvcmRlciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xzIiwiY3VycmVudFJvdXRpbmciLCJzZXRDdXJyZW50Um91dGluZyIsInVzZVN0YXRlIiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwidXNlQmluZGVyIiwiYnJlYWRjcnVtYk91dHB1dCIsIm1hcCIsImxpbmsiLCJsYWJlbCIsImlzQ2hlY2tlZCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJMaW5rIiwiaHJlZiIsImxlbmd0aCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvaW5kZXgudHN4IiwiL3R5cGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVksU0FBVUksVUFBVUEsQ0FDckNDLEtBQXNDO1lBRXRDLE1BQU07Y0FBRUMsS0FBSztjQUFFQyxLQUFLO2NBQUVDLE1BQU07Y0FBRUMsU0FBUztjQUFFQztZQUFRLENBQUUsR0FBR0wsS0FBSztZQUMzRCxJQUFJTSxHQUFHLEdBQUcscUJBQXFCRixTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2pFLElBQUlELE1BQU0sRUFBRUcsR0FBRyxJQUFJLGdCQUFnQjtZQUVuQyxNQUFNLENBQUNDLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR2QsS0FBSyxDQUFDZSxRQUFRLENBQ3hEWixRQUFBLENBQUFhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQ3JCO1lBRUQsSUFBQWQsTUFBQSxDQUFBZSxTQUFTLEVBQUMsQ0FBQ2hCLFFBQUEsQ0FBQWEsT0FBTyxDQUFDLEVBQUUsTUFBTUYsaUJBQWlCLENBQUNYLFFBQUEsQ0FBQWEsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1lBRW5FLElBQUlFLGdCQUFnQixHQUFHLEVBQUU7WUFDekIsSUFBSVosS0FBSyxFQUFFO2NBQ1RZLGdCQUFnQixHQUFHWixLQUFLLENBQUNhLEdBQUcsQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBRUMsS0FBSyxDQUFDLEtBQUk7Z0JBQzdDLE1BQU1DLFNBQVMsR0FDYkYsSUFBSSxLQUFLbkIsUUFBQSxDQUFBYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxHQUN6Qiw0QkFBNEIsR0FDNUIsbUJBQW1CO2dCQUV6QixPQUNFbEIsS0FBQSxDQUFBeUIsYUFBQTtrQkFBSUMsR0FBRyxFQUFFLEdBQUdKLElBQUksSUFBSUMsS0FBSztnQkFBRSxHQUN6QnZCLEtBQUEsQ0FBQXlCLGFBQUEsQ0FBQ3ZCLEtBQUEsQ0FBQXlCLElBQUk7a0JBQUNqQixTQUFTLEVBQUVjLFNBQVM7a0JBQUVJLElBQUksRUFBRU47Z0JBQUksR0FDbkNDLEtBQUssQ0FDRCxDQUNKO2NBRVQsQ0FBQyxDQUFDOztZQUdKLE9BQ0V2QixLQUFBLENBQUF5QixhQUFBO2NBQVFmLFNBQVMsRUFBRUU7WUFBRyxHQUNwQlosS0FBQSxDQUFBeUIsYUFBQSxhQUFLbEIsS0FBSyxDQUFNLEVBQ2ZhLGdCQUFnQixDQUFDUyxNQUFNLEdBQUcsQ0FBQyxJQUMxQjdCLEtBQUEsQ0FBQXlCLGFBQUE7Y0FBSWYsU0FBUyxFQUFDO1lBQVksR0FBRVUsZ0JBQWdCLENBQzdDLEVBQ0RwQixLQUFBLENBQUF5QixhQUFBLGNBQU1kLFFBQVEsQ0FBTyxDQUNkO1VBRWI7Ozs7Ozs7Ozs7O1VDN0NBOztVQUVBbUIsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119