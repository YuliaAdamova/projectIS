var App = function(){
	this.modules = {
		random: new RandGenerator(),
		knitting: new KnittingGenerator()
	}

	this.spec = {
		start:function(){
			mocha.run();
		}
	}
}

var app = new App();