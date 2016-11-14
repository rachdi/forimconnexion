
var express = require('express'),

app = express();
var bodyParser=require('body-parser');
var fs=require('fs');
var parser=bodyParser.urlencoded({extended:false});
app.use(express.static("public"));
app.use(parser);
app.post('/process_post',function(req, res){
	console.log(req.body);
	response= {
		id:req.body.id,
		user_name:req.body.user_name,
		password:req.body.password,
	}
	console.log(response);
//lire le fichier avec write file

fs.readFile(__dirname +'/public/yes.json', 'utf8',function(err,data){

      //transformer en objet

      var content = JSON.parse(data);

      //increment le numéro de l'ID

      response.id=content.form.length +1;

      //mettre dans le fichier yes.json

      content.form.push(response);

      //transformer en string

      var fileStr = JSON.stringify(content);

      if(err) throw err;

      fs.writeFile(__dirname +'/public/yes.json',fileStr, 'utf8',function(err){

      	if(err) throw err;



      });

  });

fs.writeFile(__dirname+'/public/'+req.body.id, req.body.user_name, req.body.password,'utf8',function(err){

	if(err) throw err;

	res.send('Bravo vous êtes connecté à votre compte');

});

});



app.listen(1991, function(){

	console.log('serveur lancé sur le port 1991');
});