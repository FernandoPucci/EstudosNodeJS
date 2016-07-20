var express = require ('express'); 

var app = express(); 


var testeVetor = [
	{nome: "Tata", telefone: "9999-2222","cor":"green", "cidade":{"idCidade":3387,"idEstado":11,"uf":"MG","nome":"MONTE SANTO DE MINAS"}, data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{nome: "Sandra", telefone: "9999-3333","cor":"yellow", "cidade":{"idCidade":3387,"idEstado":11,"uf":"MG","nome":"MONTE SANTO DE MINAS"}, data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{nome: "Mariana", telefone: "9999-9999", "cor":"blue", "cidade":{"idCidade":3387,"idEstado":11,"uf":"MG","nome":"MONTE SANTO DE MINAS"}, data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];

app.set('port', process.env.PORT || 3000);

//CORS
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', function(req, res){

	res.send('Express funcionando corretamente.');

});

app.get('/meusContatos', function(req, res){

	res.json(testeVetor);

});
app.listen(app.get('port'), function(){

	console.log('Express foi iniciado, pressione Ctrl+C a qualquer momento para finalizá-lo. ');

});


