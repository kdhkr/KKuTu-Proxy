# KKuTu-Proxy
KKuTu-Proxy is a app that proxies all WS requests, especially designed for [KKuTu](https://github.com/JJoriping/KKuTu).

# Installation
1. [Clone](https://github.com/hatty163/KKuTu-Proxy) this repository.
1. Run `npm install` in the repository.
1. [Configure](https://github.com/hatty163/KKuTu-Proxy/blob/master/app.js#L11) line 11-39 on app.js.
1. Run the program.
1. Done!

# HTTP to HTTPS Redirect
1. Of course, Enable HTTPS on the app.js configuration.
1. If required, [change](https://github.com/hatty163/KKuTu-Proxy/blob/master/app.js#L38) the port number(s) on line 38~39.
1. Change lines 88~99 on [KKuTu/Server/lib/Web/main.js](https://github.com/JJoriping/KKuTu/blob/master/Server/lib/Web/main.js#L88) to below:
```js
Server.use((req, res, next) => {
  if(req.protocol == 'http') {
    let url = 'https://'+req.get('host')+req.path;
    res.status(302).redirect(url);
  }
});
```
1. Restart your KKuTu Web Serer and the program.
1. Done!

# Contributing
If you think something important is missing or should be different based on your experience, I'd love to hear it!
If you have suggestions for improving this application, open an issue on this project.

# License
[AGPL 3.0](https://github.com/hatty163/KKuTu-Proxy/blob/master/LICENSE)
