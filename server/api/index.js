const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const { errHandle } = require('../utils');


// 获取json 数据
router.get('/resume', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*') // 这里是跨域的处理 
  const file = path.join(__dirname, '../db/resume.json');
  fs.readFile(file, 'utf-8', function (err, data) {
    if (err) {
      errHandle(res, err)
      return
    }

    res.send({
      code: 0,
      systemMsg: null,
      msg: "操作成功!",
      object: data
    });
  });
})

router.post('/resume', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*') // 这里是跨域的处理 

  const file = path.join(__dirname, '../db/resume.json');
  fs.writeFile(file, JSON.stringify(req.body), function (err) {
    if (err) {
      errHandle(res, err)
      return
    }

    res.send({
      code: 0,
      systemMsg: null,
      msg: "操作成功!",
      object: null
    });
  })

})
module.exports = router;
