// server.js
const cors_proxy = require('cors-anywhere');

const host = '0.0.0.0';
const port = process.env.PORT || 5000; // Use Heroku's port or default to 5000

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    redirectSameOrigin: true,
    httpProxyOptions: {
        changeOrigin: true // Enable this to bypass CORS issues by changing the origin header
    }
}).listen(port, host, () => {
    console.log(`CORS Anywhere proxy server is running on ${host}:${port}`);
});
