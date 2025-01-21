System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
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
          "vspecifier": "@bg/jadmin@0.0.1/error-500",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('es');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 2918515997,
        creator: function (require, exports) {
          exports.txt = {
            "notifications": "Mostrar notificaciones",
            "email": "Correo electrónico",
            "password": "Establecer nueva contraseña",
            "fields": "Editar perfil",
            "names": "Nombre",
            "lastNames": "lastName",
            "currentPassword": "Contraseña actual",
            "newPassword": "Contraseña nueva",
            "repeatPassword": "Repetir contraseña",
            "save": "Guardar",
            "photo": "Foto de perfil",
            "camera": "Cámara",
            "gallery": "Galería",
            "logout": "Cerrar de sesión ",
            "confirm": "Confirmar",
            "cancel": "Cancelar",
            "confirmLogout": "¿Desea cerrar la sesión?",
            "dark": "Aplicar tema oscuro",
            "light": "Aplicar tema claro",
            "title": "Perfil de usuario",
            "sureLogout": "¿Seguro que quieres cerrar la sesión?",
            "passwordError": "Las contraseña no coincide",
            "samePassword": "La nueva contraseña debe ser diferente a la anterior.",
            "currentPasswordError": "Contraseña incorrecta",
            "successPassword": "Contraseña cambiada exitosamente",
            "error": "Ha ocurrido un error",
            "successfully": "Datos cambiados exitosamente",
            "information": "La contraseña debe contener un mínimo de 8 caracteres, al menos una(1) mayúscula, una(1) minúscula, un(1) valor numérico y un(1) carácter especial."
          };
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./txt",
        "from": "txt",
        "name": "txt"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'txt') && _export("txt", txt = require ? require('./txt').txt : value);
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