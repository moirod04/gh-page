System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            _export("default", {
                "package": "sgs-workflow",
                "version": "1.0.0",
                "languages": {
                    "default": "en",
                    "supported": ["en", "es"]
                },
                "global.css": true,
                "layout": "layout-login-app",
                "params": {
                    "environment": "development",
                    "server": "http://10.137.12.60:7051/",
                    "securityServer": "http://10.137.12.60:2921/",
                    "filesServer": "http://10.137.12.60:7071/",
                    "application": {
                        "localDB": "sgs",
                        "localDBVersion": "1",
                        "version": "2.0",
                        "tables": {
                            "rows": 4
                        },
                        "ad": {
                            "email": "cauglobal@santillana.com"
                        }
                    }
                },
                "ssr": {},
                "backend": {}
            });
        }
    };
});