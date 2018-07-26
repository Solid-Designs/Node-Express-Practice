exports.sayHello = function(req, res, next){
  res.render('index');
  next();
};

exports.sayGoodbye = function(req, res, next){
    var name = req.body.name;
    console.log(name);
    res.render('confirm', {
      name: name
    });
    next();
};
