var express = require('express');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.use(express.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(3000, () => {
  console.log("server listening at port 3000")
})

