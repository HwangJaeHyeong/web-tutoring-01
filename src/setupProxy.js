
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/naver', {
      target: 'https://sports.news.naver.com',
      pathRewrite: {
        '^/naver':''
      },
      changeOrigin: true
    })
  )
  
  app.use(
    createProxyMiddleware('/ajunews', {
      target: 'https://www.ajunews.com/',
      pathRewrite: {
        '^/ajunews':''
      },
      changeOrigin: true
    })
  )
  
};