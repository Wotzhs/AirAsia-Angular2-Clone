const express = require('express');
const app = express();
const path = require('path');


app.use('/', express.static(path.resolve(__dirname, 'public/')))
app.use('/src/assets/img/', express.static(path.resolve(__dirname, 'src/assets/img/')))

app.get('/', (req, res)=>{
  res.sendFile('./public/index.html')
})

app.listen(3000)
console.log("start")
