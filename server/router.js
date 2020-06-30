const express = require('express')
const path = require('path');

// 1. 创建一个路由容器
const router = express.Router()

// 2. 把路由都挂载到 router 路由容器中 替代app.get()
router.get('/', function (req, res) {
  // res.render(path.resolve(__dirname, '../dist/index.html'))
  res.sendFile('index.html', { root: path.resolve(__dirname, '../dist/') });

})
// 3. 把 router 导出
module.exports = router