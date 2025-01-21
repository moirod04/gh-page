System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/components", "@bg/jadmin@0.0.1/chart"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, IndicatorsChart, __beyond_pkg, hmr;
  _export("IndicatorsChart", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi012Components) {
      dependency_3 = _pragmateUi012Components;
    }, function (_bgJadmin001Chart) {
      dependency_4 = _bgJadmin001Chart;
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
          "vspecifier": "@bg/jadmin@0.0.1/widgets/indicators-chart"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['@bg/jadmin/chart', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/widgets/indicators-chart');
      ims = new Map();
      /***********************************
      INTERNAL MODULE: ./chart/button-date
      ***********************************/
      ims.set('./chart/button-date', {
        hash: 2665120520,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentButtonDate = ContentButtonDate;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function ContentButtonDate({
            handlePositionDate
          }) {
            return _react.default.createElement("div", {
              className: "content-date"
            }, _react.default.createElement("h4", null, "Date by:"), _react.default.createElement(_components.ButtonGroup, {
              orientation: "row"
            }, _react.default.createElement(_components.Button, {
              onClick: () => handlePositionDate(0)
            }, "Weeks"), _react.default.createElement(_components.Button, {
              onClick: () => handlePositionDate(1)
            }, "Months"), _react.default.createElement(_components.Button, {
              onClick: () => handlePositionDate(2)
            }, "Years")));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./chart/button-types
      ************************************/

      ims.set('./chart/button-types', {
        hash: 2448963184,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentButtonType = ContentButtonType;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function ContentButtonType({
            handlePositionTypes
          }) {
            return _react.default.createElement("div", {
              className: "content-types"
            }, _react.default.createElement("h4", null, "Chart type:"), _react.default.createElement(_components.ButtonGroup, {
              orientation: "row"
            }, _react.default.createElement(_components.Button, {
              onClick: () => handlePositionTypes(0)
            }, "Doughnut"), _react.default.createElement(_components.Button, {
              onClick: () => handlePositionTypes(1)
            }, "Line"), _react.default.createElement(_components.Button, {
              onClick: () => handlePositionTypes(2)
            }, "Bar"), _react.default.createElement(_components.Button, {
              onClick: () => handlePositionTypes(3)
            }, "Pie")));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./chart/colors
      ******************************/

      ims.set('./chart/colors', {
        hash: 3584000120,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.borderColor = exports.backgroundColor = void 0;
          const backgroundColor = exports.backgroundColor = ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'];
          const borderColor = exports.borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
        }
      });

      /*****************************
      INTERNAL MODULE: ./chart/index
      *****************************/

      ims.set('./chart/index', {
        hash: 434635415,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chart = Chart;
          var _react = require("react");
          var _chart = require("@bg/jadmin/chart");
          var _context = require("../context");
          var _usePosition = require("./use-position");
          var _colors = require("./colors");
          function Chart() {
            const {
              nameIndicator,
              metadata
            } = (0, _context.useIndicatorContext)();
            const {
              positionDate,
              positionType
            } = (0, _usePosition.usePositions)();
            const dates = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'], ['January', 'February', 'March', 'April', 'May', 'June'], ['2018', '2019', '2020', '2021', '2022', '2023']];
            const types = ['doughnut', 'line', 'bar', 'pie'];
            const currentIndicator = metadata.find(item => item.name === nameIndicator);
            const data = currentIndicator.chart.data;
            const label = currentIndicator.chart.label;
            const ref = _react.default.useRef();
            const chartData = {
              labels: dates[positionDate],
              datasets: [{
                label,
                data,
                backgroundColor: _colors.backgroundColor,
                borderColor: _colors.borderColor,
                borderWidth: 1
              }]
            };
            return _react.default.createElement("div", {
              className: "container-chart",
              style: {
                maxWidth: '100%',
                width: '100%',
                maxHeight: '500px',
                minHeight: '500px'
              }
            }, _react.default.createElement("h3", null, nameIndicator), _react.default.createElement(_chart.ChartComponent, {
              showLegend: false,
              title: '',
              type: types[positionType],
              ref: ref,
              chartData: chartData
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./chart/use-position
      ************************************/

      ims.set('./chart/use-position', {
        hash: 2749500741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.usePositions = usePositions;
          var _react = require("react");
          function usePositions() {
            const [positionDate, setPositionDate] = _react.default.useState(0);
            const [positionType, setPositionType] = _react.default.useState(0);
            const handlePositionTypes = position => {
              setPositionType(position);
            };
            const handlePositionDate = position => {
              setPositionDate(position);
            };
            return {
              positionDate,
              positionType,
              handlePositionTypes,
              handlePositionDate
            };
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2252546069,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useIndicatorContext = exports.IndicatorContext = void 0;
          var _react = require("react");
          const IndicatorContext = exports.IndicatorContext = _react.default.createContext({});
          const useIndicatorContext = () => _react.default.useContext(IndicatorContext);
          exports.useIndicatorContext = useIndicatorContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1167501396,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IndicatorsChart = IndicatorsChart;
          var _react = require("react");
          var _item = require("./item");
          var _chart = require("./chart");
          var _context = require("./context");
          /*bundle*/
          function IndicatorsChart({
            metadata
          }) {
            const [nameIndicator, setNameIndicator] = _react.default.useState(metadata[0].name);
            const output = metadata.map(item => _react.default.createElement(_item.Item, {
              item: item,
              key: item.id
            }));
            const value = {
              nameIndicator,
              setNameIndicator,
              metadata
            };
            return _react.default.createElement(_context.IndicatorContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "container-indicators-chart"
            }, _react.default.createElement("div", {
              className: "container-indicators"
            }, output), _react.default.createElement(_chart.Chart, null)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 3641749720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _chart = require("@bg/jadmin/chart");
          var _context = require("./context");
          function Item({
            item
          }) {
            const {
              name,
              chart: {
                type
              },
              count
            } = item;
            const {
              nameIndicator,
              setNameIndicator
            } = (0, _context.useIndicatorContext)();
            const isSelected = name === nameIndicator;
            const cls = isSelected ? 'selected' : '';
            const handleNameIndicator = () => {
              setNameIndicator(name);
            };
            const ref = _react.default.useRef();
            const chartData = {
              labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
              datasets: [{
                label: 'Ventas',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)' // Junio
                ],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
              }]
            };
            return _react.default.createElement("div", {
              className: `card-indicator ${cls}`,
              onClick: handleNameIndicator
            }, _react.default.createElement("div", {
              className: "d-flex justify-between"
            }, _react.default.createElement("div", {
              className: "total-section"
            }, _react.default.createElement("h6", null, name), _react.default.createElement("span", null, count)), _react.default.createElement("div", {
              className: "chart-wrapper mt-1"
            }, _react.default.createElement(_chart.ChartComponent, {
              type: type,
              ref: ref,
              showLines: false,
              showLegend: false,
              chartData: chartData
            }))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "IndicatorsChart",
        "name": "IndicatorsChart"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IndicatorsChart') && _export("IndicatorsChart", IndicatorsChart = require ? require('./index').IndicatorsChart : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJDb250ZW50QnV0dG9uRGF0ZSIsImhhbmRsZVBvc2l0aW9uRGF0ZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQnV0dG9uR3JvdXAiLCJvcmllbnRhdGlvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJDb250ZW50QnV0dG9uVHlwZSIsImhhbmRsZVBvc2l0aW9uVHlwZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJleHBvcnRzIiwiYm9yZGVyQ29sb3IiLCJfY2hhcnQiLCJfY29udGV4dCIsIl91c2VQb3NpdGlvbiIsIl9jb2xvcnMiLCJDaGFydCIsIm5hbWVJbmRpY2F0b3IiLCJtZXRhZGF0YSIsInVzZUluZGljYXRvckNvbnRleHQiLCJwb3NpdGlvbkRhdGUiLCJwb3NpdGlvblR5cGUiLCJ1c2VQb3NpdGlvbnMiLCJkYXRlcyIsInR5cGVzIiwiY3VycmVudEluZGljYXRvciIsImZpbmQiLCJpdGVtIiwibmFtZSIsImRhdGEiLCJjaGFydCIsImxhYmVsIiwicmVmIiwidXNlUmVmIiwiY2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJib3JkZXJXaWR0aCIsInN0eWxlIiwibWF4V2lkdGgiLCJ3aWR0aCIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsIkNoYXJ0Q29tcG9uZW50Iiwic2hvd0xlZ2VuZCIsInRpdGxlIiwidHlwZSIsInNldFBvc2l0aW9uRGF0ZSIsInVzZVN0YXRlIiwic2V0UG9zaXRpb25UeXBlIiwicG9zaXRpb24iLCJJbmRpY2F0b3JDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaXRlbSIsIkluZGljYXRvcnNDaGFydCIsInNldE5hbWVJbmRpY2F0b3IiLCJvdXRwdXQiLCJtYXAiLCJJdGVtIiwia2V5IiwiaWQiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiY291bnQiLCJpc1NlbGVjdGVkIiwiY2xzIiwiaGFuZGxlTmFtZUluZGljYXRvciIsInNob3dMaW5lcyJdLCJzb3VyY2VzIjpbIi90cy9jaGFydC9idXR0b24tZGF0ZS50c3giLCIvdHMvY2hhcnQvYnV0dG9uLXR5cGVzLnRzeCIsIi90cy9jaGFydC9jb2xvcnMudHMiLCIvdHMvY2hhcnQvaW5kZXgudHN4IiwiL3RzL2NoYXJ0L3VzZS1wb3NpdGlvbi50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUNDO1VBQWtCLENBQUM7WUFDbEQsT0FDSUosTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDekJQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLHdCQUFpQixFQUNqQk4sTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osV0FBQSxDQUFBTSxXQUFXO2NBQUNDLFdBQVcsRUFBQztZQUFLLEdBQzFCVCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixXQUFBLENBQUFRLE1BQU07Y0FBQ0MsT0FBTyxFQUFFQSxDQUFBLEtBQU1QLGtCQUFrQixDQUFDLENBQUM7WUFBQyxXQUFnQixFQUM1REosTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osV0FBQSxDQUFBUSxNQUFNO2NBQUNDLE9BQU8sRUFBRUEsQ0FBQSxLQUFNUCxrQkFBa0IsQ0FBQyxDQUFDO1lBQUMsWUFBaUIsRUFDN0RKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLFdBQUEsQ0FBQVEsTUFBTTtjQUFDQyxPQUFPLEVBQUVBLENBQUEsS0FB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