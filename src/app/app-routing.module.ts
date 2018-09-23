import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'crypto', loadChildren: './crypto/crypto.module#CryptoPageModule' },
  { path: 'crypto-single', loadChildren: './crypto-single/crypto-single.module#CryptoSinglePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
