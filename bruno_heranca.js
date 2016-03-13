/**
 * Created by bruno on 11/03/2016.
 */

function Animal(){
	this.barulho = "";

}

Animal.prototype = {
	fazerBarulho : function(){
		return this.barulho;
	}
}

function Gato(){
	Animal.call(this);
	this.barulho = "Miau";
}

Gato.prototype = new Animal();

function Cao(){
	Animal.call(this);
	this.barulho = "Au";	
}

Cao.prototype = new Animal();

function Manada(){
	this.animais=[];
	
}

Manada.prototype = {
	adicionar : function(animal){
		this.animais.push(animal);
	}
}

function ManadaVirgula(){
	Manada.call(this);

	this.barulhos = function(){
		var temp = "";
		for(var cont=0;cont<animais.length;cont++){
			temp = temp + animais[cont].fazerBarulho()+", ";
		}
		return temp;
	}
}

	
ManadaVirgula.prototype = new Manada();


function ManadaSustenidaDupla(){
	Manada.call(this);

	this.barulhos = function(){
		var temp = '';
		for(var cont=0;cont<animais.length;cont++){
			temp= temp + animais[cont].fazerBarulho()+"# "+animais[cont].fazerBarulho()+"# ";
		}
		return temp;
	}
}

ManadaSustenidaDupla.prototype = new Manada();




var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenidaDupla();
var animais = [new Cao(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());