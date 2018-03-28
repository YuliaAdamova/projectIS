var knittingGeneratorJSModel = [{

	"id":1,
	"name":"making",
	"top_arrow":
	[
		{
			"name":"Схема",
			"properties":
			[
				{
					"level":1
				}
			]
		},
		{
			"name":"Размер",
			"properties":
			[
				{
					"lenght":2
				},
				{
					"width":0.3
				}
			]
		}
	],
	"bottom_arrow":
	[
		{
			"name":"Девочка",
			"properties":
			[
				{
					"count":2
				}
			]
		},
		{
			"name":"Спицы",
			"properties":
			[
				{
					"size":3
				}
			]
		},
	],
	"left_arrow":
	[
		{
			"name":"Шерсть",
			"properties":
			[
				{
					"price":1500
				}
			]
		}
	],
	"right_arrow":
	[
		{
			"name":"Шарф"
		}
	]
},
{
	"id":2,
	"depends_on":1,
	"name":"packing",
	"top_arrow":
	[
		{
			"name":"Заказ",
			"properties":
			[
				{
					"count":8
				}
			]
		}
	],
	"bottom_arrow":
	[
		{
			"name":"Работник склада",
			"properties":
			[
				{
					"count":2
				}
			]
		},
		{
			"name":"Коробка",
			"properties":
			[
				{
					"capacity":4
				},
				{
					"count":2
				}
			]
		},
	],
	"left_arrow":
	[
		{
			"name":"Шарф",
			"properties":
			[
				{
					"price":3000
				}
			]
		}
	],
	"right_arrow":
	[
		{
			"name":"Партия",
			"properties":[
				{
					"boxes_count":2
				}
			]
		}
	]
}]

var knittingGenerator = new KnittingGenerator();
knittingGenerator.model = knittingGeneratorJSModel;
console.log(knittingGenerator.model)
//проверяем правильно ли работает формула подсчета времени
describe("Генератор случайных чисел", function() {

  it(`Если на вход задают количество работников (2), сложность схемы (1), 
  размер изделия в метрах: длина (2) и ширина (0,3), размер спиц  (3). 
  На выходе получим время, которое будет потрачено на вязание: (1*2*0.3*3)/2 = 0,9 недель `,
  function() {
    //var index = knittingGenerator.model.item.id;
	var index = knittingGenerator.model.findIndex((item) => {return item.id == 1});
	var param_1 = knittingGenerator.model[index].top_arrow[0].properties[0].level;
	var param_2 = knittingGenerator.model[index].top_arrow[1].properties[0].lenght;
	var param_3 = knittingGenerator.model[index].top_arrow[1].properties[1].width;
	var param_4 = knittingGenerator.model[index].bottom_arrow[1].properties[0].size;
	var param_5 = knittingGenerator.model[index].bottom_arrow[0].properties[0].count;
	
  	var time_value = knittingGenerator.workTime(param_1,param_2,param_3,param_4,param_5)
	console.log(time_value.toFixed(1));
    assert.equal((time_value.toFixed(1) == 0.9), true);
  });
  it(`Если на вход задают количество шарфов в заказе (8), количество свободных коробок (3) и их вместительность (4), а также входную стоимость одного шарфа (3000), то
  на выходе получим стоимость одной партии: (3000 * 8 *(8/4)) = 48000 рублей `,
  function() {
	  
    var index_of_block = knittingGenerator.model.findIndex((i) => i.id == 2); 
	var param_0 = knittingGenerator.model[index_of_block].left_arrow[0].properties[0].price;
	var param_1 = knittingGenerator.model[index_of_block].bottom_arrow[1].properties[1].count;
	var param_2 = knittingGenerator.model[index_of_block].bottom_arrow[1].properties[0].capacity;
	var param_3 = knittingGenerator.model[index_of_block].top_arrow[0].properties[0].count;
    var cost_value = knittingGenerator.cost_value(param_0,param_1,param_2, param_3);
    assert.equal((cost_value >= 48000), true);
  });



});


