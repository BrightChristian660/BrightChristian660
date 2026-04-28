const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ success: true })
})

// 关键！必须是 0.0.0.0 和 80
app.listen(80, '0.0.0.0', () => {
  console.log('run on 80')
})
