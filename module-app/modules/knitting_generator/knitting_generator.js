var KnittingGenerator = function(){
	this.model_path = './modules/knitting_generator/model.json'
	this.model = {};
	this.workTime = (level, lenght, width, needle, count) => {
		var res = null;
		res = (level*lenght*width*needle)/count;
		
		return res;
	}

	this.load_model = () => {
		$.get(this.model_path, (res)=>{
			console.log(res)
			this.model = res;
		})
	}

	this.init = () => {
		this.load_model();
	}
	this.init();
} 