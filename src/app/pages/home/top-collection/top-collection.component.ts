import { Component, OnInit, Input } from '@angular/core';

import { trendySlider } from '../data';

@Component({
	selector: 'molla-top-collection',
	templateUrl: './top-collection.component.html',
	styleUrls: ['./top-collection.component.scss']
})

export class TopCollectionComponent implements OnInit {

	@Input() products = [];
	@Input() loaded = false;

	categories = [['all'], ['accessories'], ['cameras', 'camcorders'], ['computers', 'tablets'], ['entertainment']];
  	titles = ['All', 'Accessories', 'Cameras & Camcorders', 'Computers & Tablets', 'Entertainment']
	sliderOption = trendySlider;

	constructor() { }

	ngOnInit(): void {
	}
}
