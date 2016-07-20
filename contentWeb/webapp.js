var express = require('express');

var app = express(); 

app.disable('x-powered-br'); 


var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');


//outras importacoes aqui

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));







app.get('/', function(req, res){
	res.render('home');
});


app.get('/about', function(req, res){
	res.render('about');
});

app.get('/teste', function(req, res, next){
	console.log('Tentando acessar /teste'); 
	res.render('teste');
	throw new Error('Pagina Teste inexistente.');

}); 

app.use(function(req,res){

	res.type('text/html');
	res.status(404);
	res.render('404');

});

app.use(function(err, req, res, next){

	console.error(err.stack);
	res.status(500);
	res.render('500');

});


//gera log quando direcionado para pagina erronea
app.use(function(req, res, next){
	console.log("Procurando por: " + req.url);
	next();

});


app.use(function(err, req, res, next){

	console.log('Erro: ' + err.message);
	next();

});



app.listen(app.get('port'), function(){

	console.log('Aplicação WebApp funcionando na porta ' + app.get('port')+ '. Pressione Ctrl+C para encerrar.'); 

});




