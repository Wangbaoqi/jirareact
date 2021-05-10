module.exports = (req, res, next) => {

  if(req.method === 'POST' && req.path === '/login') {
    if(req.body.username == 'nate' && req.body.password === '1111') {
      return res.status(200).json({
        user: {
          token: '123'
        }
      })
    }else {
      return res.status(400).json({
        msg: 'login fail'
      })
    }
  }
  next()
}