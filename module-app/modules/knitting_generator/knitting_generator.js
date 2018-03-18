var KnittingGenerator = function(){
	this.model_path = './modules/knitting_generator/model.json'
	this.model = {};
	this.workTime = (level, lenght, width, needle, count) => {
		var result = null;
		result = (level*lenght*width*needle)/count;
		
		return result;
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