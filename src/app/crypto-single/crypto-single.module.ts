import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CryptoSinglePage } from './crypto-single.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoSinglePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CryptoSinglePage]
})
export class CryptoSinglePageModule {}
