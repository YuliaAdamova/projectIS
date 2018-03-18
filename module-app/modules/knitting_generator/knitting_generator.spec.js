var knittingGeneratorJSModel = {
	"name":"test",
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
}

var knittingGenerator = new KnittingGenerator();
knittingGenerator.model = knittingGeneratorJSModel;
console.log(knittingGenerator.model)
//проверяем правильно ли работает формула подсчета времени
describe("Генератор случайных чисел", function() {

  it(`Если на вход задают количество работников (2), сложность схемы (1), 
  размер изделия в метрах: длина (2) и ширина (0,3), размер спиц  (3). 
  На выходе получим время, которое будет потрачено на вязание: (1*2*0.3*3)/2 = 0,9 недель `,
  function() {

	var param_1 = knittingGenerator.model.top_arrow[0].properties[0].level;
	var param_2 = knittingGenerator.model.top_arrow[1].properties[0].lenght;
	var param_3 = knittingGenerator.model.top_arrow[1].properties[1].width;
	var param_4 = knittingGenerator.model.bottom_arrow[1].properties[0].size;
	var param_5 = knittingGenerator.model.bottom_arrow[0].properties[0].count;
	
  	var time_value = knittingGenerator.workTime(param1,param_2,param_3,param_4,param_5)

    assert.equal((time_value = 0.9), true);
  });


});


