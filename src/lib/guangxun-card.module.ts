import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GuangxunCardComponent } from './guangxun-card.component';

/**
 * 適用「沒有啟用 standalone」或還在使用 NgModule 的專案。
 * 只做 re-export，不宣告任何額外東西。
 */
@NgModule({
  // 因為 GuangxunCardComponent 是 standalone
  // -> 只要把它放在 imports / exports 就能被 NgModule 使用
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    GuangxunCardComponent,
  ],
  exports: [GuangxunCardComponent],
})
export class GuangxunCardModule {}
