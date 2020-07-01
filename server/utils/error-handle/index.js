const errHandle = (res, err) => {
  res.send({
    code: 1,
    systemMsg: err,
    msg: "操作失败!",
    object: null,
  });
}

module.exports = errHandle