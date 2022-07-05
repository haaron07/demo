import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/shared/services/modal.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import { introSlider, brandSlider } from '../data';

@Component({
	selector: 'molla-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

	products = [];
	dealProducts = [];
	topProducts = [];
	posts = [];
	loaded = false;
	introSlider = introSlider;
	brandSlider = brandSlider;

	constructor(public apiService: ApiService, public utilsService: UtilsService, private modalService: ModalService,) {
		this.modalService.openNewsletter();

		this.apiService.fetchHomeData().subscribe(result => {
			this.products = result.products;
			this.dealProducts = utilsService.attrFilter(result.products, 'until').slice(0, 2);
			this.topProducts = utilsService.attrFilter(result.products, 'top');
			this.posts = result.blogs;
			this.loaded = true;
		})
	}

	ngOnInit(): void {
	}
}
