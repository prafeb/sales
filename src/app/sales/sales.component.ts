import { Component, OnInit } from '@angular/core';
export interface Sales {
	id: string;
	title: string;
	image: string;
	subtitle: string;
	brand: string;
	reviews?: (ReviewsEntity)[] | null;
	retailer: string;
	details?: (string)[] | null;
	tags?: (string)[] | null;
	sales?: (SalesEntity)[] | null;
}
export interface ReviewsEntity {
	customer: string;
	review: string;
	score: number;
}
export interface SalesEntity {
	weekEnding: string;
	retailSales: number;
	wholesaleSales: number;
	unitsSold: number;
	retailerMargin: number;
}
export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
  }
  
 

@Component({
	selector: 'app-sales',
	templateUrl: './sales.component.html',
	styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
	array1: any[] = [1, 2];
	array2: any[] = [3, 4];
	displayedColumns: string[] = ['WEEK ENDING', 'RETAIL SALES', 'WHOLESALE SALES', 'UNITS SOLD', 'RETAILER MARGIN'];
  dataSource;
	constructor() {
		this.lineChartData = [
			{ data: this.array1 },
			{ data: this.array2 }
		];
		this.fillArry();
		this.dataSource = this.data[0].sales;
	}
	public lineChartData: Array<any>;
	public lineChartLabels: Array<any> = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	public lineChartOptions: any = {
		responsive: true,
		legend: {
			display: false,
		},
		scales: {
			yAxes: [{
				display: false
			}]
		}
	};

	fillArry() {
		for (var i = 0; i < this.data[0].sales.length; i++) {
			this.array1.push(this.data[0].sales[i].retailSales);
			this.array2.push(this.data[0].sales[i].wholesaleSales);
		}

	}
	public lineChartColors: Array<any> = [
		{ // grey
			backgroundColor: 'rgba(148,159,177,0.2)',
			borderColor: 'rgba(148,159,177,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{ // dark grey
			backgroundColor: 'rgba(77,83,96,0.2)',
			borderColor: 'rgba(77,83,96,1)',
			pointBackgroundColor: 'rgba(77,83,96,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(77,83,96,1)'
		}
	];
	public lineChartLegend: boolean = false;
	public lineChartType: string = 'line';


	data: Sales[] = [{
		"id": "B007TIE0GQ",
		"title": "Shark Ninja",
		"image": "https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg",
		"subtitle": "Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System",
		"brand": "Nutribullet",
		"reviews": [
			{
				"customer": "ILoveToReview",
				"review": "I had not seen the infomercial when I purchased this. I was looking for a powerful smoothie maker after my smoothie blender died. The base is MUCH heavier/substantial and well made than the Magic Bullet. It also looks more expensive/nice. I know this because I was at Target examining them both closely. The 600 watts of power has been great to tear through kale, chard, frozen berries, almonds, chia seeds. I love the consistency of the smoothie when I am done. it is not a complete liquid, but really well blended. I love that you keep the nutrition of the pulp. It is not like my first old juicer that left the pulp out of the juice, but also the nutrition. It was a NIGHTMARE to clean. Then I bought the smoothie blender that is now kaput! The Nutri Bullet literally rinses clean in ten seconds. Obviously rinse it right after you are done using it. My daughter won't touch anything green and we put kale, chard, broccoli and fruit,berries to make it NOT green and she likes it. Honestly we are NOT a family that likes kale, chard, broccoli, prunes, but feel so much better now that we are ingesting them. It took about two weeks for me to notice a difference and feel better. My husband and I have been having two a day and I have lost 4 lbs in 18 days without trying. They just keep you full and satisfied. It has taken the edge off my sweet tooth. They will keep you regular.I don\'t know why they don\'t just give you two large smoothie cups. We only use the big size.",
				"score": 5
			}
		],
		"retailer": "Amazon",
		"details": ["Effortlessly pulverizes fruits, vegetables, superfoods and protein shakes",
			"High-torque power base and 600-watt motor",
			"Power, patented blade design with cyclonic action",
			"Includes a power base, 1 tall cup, 2 short cups, 1 flat blade and 1 emulsifying blade, 2 re-sealable lids, pocket nutritionist and manual with recipes",
			"This product is manufactured in compliance with US & Canadian Electrical Standards"
		],
		"tags": ["Pantry", "Obsolete", "Blender", "Lightning Deal"],
		"sales": [{
			"weekEnding": "2016-01-01",
			"retailSales": 348123,
			"wholesaleSales": 255721,
			"unitsSold": 887,
			"retailerMargin": 123294
		}, {
			"weekEnding": "2016-01-08",
			"retailSales": 256908,
			"wholesaleSales": 189678,
			"unitsSold": 558,
			"retailerMargin": 67230
		}, {
			"weekEnding": "2016-01-15",
			"retailSales": 243522,
			"wholesaleSales": 255721,
			"unitsSold": 623,
			"retailerMargin": 567845
		}, {
			"weekEnding": "2016-01-22",
			"retailSales": 458646,
			"wholesaleSales": 356475,
			"unitsSold": 745,
			"retailerMargin": 453645
		}, {
			"weekEnding": "2016-01-29",
			"retailSales": 929844,
			"wholesaleSales": 405784,
			"unitsSold": 832,
			"retailerMargin": 676577
		}, {
			"weekEnding": "2016-02-05",
			"retailSales": 243522,
			"wholesaleSales": 255721,
			"unitsSold": 900,
			"retailerMargin": 978654
		}, {
			"weekEnding": "2016-02-12",
			"retailSales": 243522,
			"wholesaleSales": 255721,
			"unitsSold": 432,
			"retailerMargin": 342467
		}, {
			"weekEnding": "2016-02-19",
			"retailSales": 243522,
			"wholesaleSales": 255721,
			"unitsSold": 789,
			"retailerMargin": 734523
		}, {
			"weekEnding": "2016-02-26",
			"retailSales": 243522,
			"wholesaleSales": 255721,
			"unitsSold": 826,
			"retailerMargin": 134573
		}, {
			"weekEnding": "2016-03-05",
			"retailSales": 243522,
			"wholesaleSales": 255721,
			"unitsSold": 904,
			"retailerMargin": 423422
		}, {
			"weekEnding": "01-02-31",
			"retailSales": 243522,
			"wholesaleSales": 255721,
			"unitsSold": 508,
			"retailerMargin": 123466
		}]
	}]


	ngOnInit() {
	}

}
