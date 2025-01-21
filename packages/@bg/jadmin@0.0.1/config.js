System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@bg/jadmin",
        "version": "0.0.1",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "environment": "development",
        "global.css": true,
        "layout": "layout-login",
        "params": {
          "token": "apm1k",
          "mediaServer": "https://api.dev.bg-media.balearesgroup.com",
          "application": {
            "localDB": "ospif-admin",
            "localDBVersion": "1",
            "token": "apm1k",
            "logo": "assets/logo.png",
            "tables": {
              "rows": 5
            },
            "isNotifications": true,
            "isSupport": true,
            "url": "http://localhost:3002/",
            "isDarkMode": true,
            "isChangePassword": true,
            "isProfile": true
          },
          "uploadUrl": {
            "development": "http://localhost:3002/",
            "production": "http://localhost:3002/"
          },
          "testEmail": "a9eeb571c9@catdogmail.live",
          "pathsHeader": {
            "profile": "/profile",
            "password": "/auth/password"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});