System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@bgroup/jview",
        "version": "1.0.3",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "environment": "development",
        "global.css": true,
        "layout": "main-jview-layout",
        "params": {
          "application": {
            "tables": {
              "rows": 5
            }
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});