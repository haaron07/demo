import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'angular-owl-carousel';

import { SharedModule } from '../../shared/shared.module';

import { SpecialCollectionComponent } from './special-collection/special-collection.component';
import { TopCollectionComponent } from './top-collection/top-collection.component';
import { IndexComponent } from './index/index.component';
import { BlogCollectionComponent } from './blog-collection/blog-collection.component';
import { DealCollectionComponent } from './deal-collection/deal-collection.component';
import { TrendyCollectionComponent } from './trendy-collection/trendy-collection.component';

@NgModule({
	declarations: [
		SpecialCollectionComponent,
		TopCollectionComponent,
		IndexComponent,
		BlogCollectionComponent,
		DealCollectionComponent,
		TrendyCollectionComponent
	],

	imports: [
		CommonModule,
		RouterModule,
		NgbModule,
		OwlModule,
		SharedModule
	]
})

export class HomeModule { }
