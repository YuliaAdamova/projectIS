var KnittingGenerator = function(){
	this.model_path = './modules/knitting_generator/model.json'
	this.model = {};
	this.workTime = (level, lenght, width, needle, count) => {
		var res = null;
		res = (level*lenght*width*needle)/count;
		
		return res;
	}
	this.cost_value = (scarf_cost, box_count, box_capacity, scarf_in_order) => {
		var result = null;
		if(box_count>=(scarf_in_order/box_capacity))			
			result = (scarf_cost*scarf_in_order*(scarf_in_order/box_capacity));
		else
			result = 0;
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