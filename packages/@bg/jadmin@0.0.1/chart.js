System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@bg/jadmin@0.0.1/wrapper", "@jadmin/ui@1.0.0/hooks", "chart.js@4.4.1/auto"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ChartComponent, __beyond_pkg, hmr;
  _export("ChartComponent", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_bgJadmin001Wrapper) {
      dependency_2 = _bgJadmin001Wrapper;
    }, function (_jadminUi100Hooks) {
      dependency_3 = _jadminUi100Hooks;
    }, function (_chartJs441Auto) {
      dependency_4 = _chartJs441Auto;
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
          "vspecifier": "@bg/jadmin@0.0.1/chart"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@bg/jadmin/wrapper', dependency_2], ['@jadmin/ui/hooks', dependency_3], ['chart.js/auto', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 107566022,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChartComponent = void 0;
          var _react = require("react");
          var _wrapper = require("@bg/jadmin/wrapper");
          var _hooks = require("@jadmin/ui/hooks");
          var _auto = require("chart.js/auto");
          /*bundle*/ // TODO Investigar el tipo correcto para ref
          const ChartComponent = exports.ChartComponent = (0, _react.forwardRef)((props, ref) => {
            const {
              chartData,
              type,
              title,
              showLines,
              showLegend
            } = props;
            const chartInstance = (0, _react.useRef)(null);
            const [upd, setUpdate] = (0, _react.useState)({});
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ? themeStorage === 'dark' : defaultTheme === 'dark';
            (0, _hooks.useBinder)([_wrapper.appWrapper], () => setUpdate({}), 'change.theme');
            let style = getComputedStyle(document.documentElement);
            const titleColor = style.getPropertyValue('--text-color').trim();
            const chartTextColor = style.getPropertyValue('--text-color').trim();
            const lineColor = userTheme ? 'rgba(255,255, 255, 0.2)' : 'rgba(0,0,0, 0.2)';
            (0, _react.useImperativeHandle)(ref, () => ref.current);
            (0, _react.useEffect)(() => {
              if (ref.current) {
                if (chartInstance.current) {
                  chartInstance.current.destroy();
                }
                const ctx = ref.current.getContext('2d');
                chartInstance.current = new _auto.default(ctx, {
                  type: type ?? 'doughnut',
                  data: chartData,
                  options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        maxWidth: 100,
                        display: showLegend,
                        labels: {
                          color: titleColor,
                          font: {
                            size: 14
                          }
                        }
                      },
                      title: {
                        display: !!title,
                        text: title,
                        color: titleColor,
                        font: {
                          size: 18,
                          weight: 'bold'
                        }
                      }
                    },
                    scales: {
                      y: {
                        grid: {
                          color: lineColor,
                          display: showLines
                        },
                        ticks: {
                          color: chartTextColor,
                          display: showLines
                        },
                        beginAtZero: true,
                        display: showLines
                      },
                      x: {
                        grid: {
                          color: lineColor,
                          display: showLines
                        },
                        ticks: {
                          color: chartTextColor,
                          display: showLines
                        },
                        beginAtZero: true,
                        display: showLines
                      }
                    },
                    ...props.options
                  }
                });
              }
            }, [chartData, userTheme, props?.options]);
            return _react.default.createElement("canvas", {
              ref: ref
            });
          });
          ChartComponent.defaultProps = {
            showLines: true
          };
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ChartComponent",
        "name": "ChartComponent"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ChartComponent') && _export("ChartComponent", ChartComponent = require ? require('./index').ChartComponent : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3dyYXBwZXIiLCJfaG9va3MiLCJfYXV0byIsIkNoYXJ0Q29tcG9uZW50IiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNoYXJ0RGF0YSIsInR5cGUiLCJ0aXRsZSIsInNob3dMaW5lcyIsInNob3dMZWdlbmQiLCJjaGFydEluc3RhbmNlIiwidXNlUmVmIiwidXBkIiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJ1c2VCaW5kZXIiLCJhcHBXcmFwcGVyIiwic3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ0aXRsZUNvbG9yIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRyaW0iLCJjaGFydFRleHRDb2xvciIsImxpbmVDb2xvciIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwiZGVzdHJveSIsImN0eCIsImdldENvbnRleHQiLCJkZWZhdWx0IiwiZGF0YSIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInBsdWdpbnMiLCJsZWdlbmQiLCJtYXhXaWR0aCIsImRpc3BsYXkiLCJsYWJlbHMiLCJjb2xvciIsImZvbnQiLCJzaXplIiwidGV4dCIsIndlaWdodCIsInNjYWxlcyIsInkiLCJncmlkIiwidGlja3MiLCJiZWdpbkF0WmVybyIsIngiLCJjcmVhdGVFbGVtZW50IiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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