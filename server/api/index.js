let models = require('../db');
let express = require('express');
let router = express.Router();
// let mysql = require('mysql');
// let $sql = require('../sqlMap')
// var connection = mysql.createConnection(models.mysql);

// connection.connect();
// let jsonWrite = function (res, d) {
//   if (typeof d === 'undefined') { res.json({ code: '1', msg: '操作失败' }); } else { res.json(d) }
// }

router.get('/cameras', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*') // 这里是跨域的处理 
  // let sql = $sql.getAllCameras;
  // connection.query(sql, function (err, d) {
  //   if (err) {
  //     console.error(err);
  //     return
  //   } res.send(d)
  // })
})
module.exports = router;
