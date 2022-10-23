const capitulosData = require('../data/CapituloData')

//serviço de mostrar todos os capitulos
 exports.getCapitulo = function () {
    return capitulosData.getCapitulo();
 };

//serviço de adicionar um capitulo
 exports.addCapitulo = function (titulo) {
    return capitulosData.addCapitulo(titulo);
 };

//serviço de mostrar um capitulo
 exports.showCapitulo = function (id) {
   return capitulosData.showCapitulo(id);
 }

 //serviço de atualizar um capitulo
 exports.updateCapitulo = function (dados) {
    return capitulosData.updateCapitulo(dados);
 };

 //serviço de deletar um capitulo
 exports.deleteCapitulo = function (id) {
   return capitulosData.deleteCapitulo(id);
 }