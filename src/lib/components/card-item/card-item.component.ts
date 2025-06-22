import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './parts/header/header.component';
import { ContentComponent } from './parts/content/content.component';
import { FooterComponent } from './parts/footer/footer.component';

import {
  CardItem,
  CardItemButton,
  CardItemTag
} from '../../models/guangxun-card.interface';
import { ArrangeType, CardStyle } from '../../models/guangxun-card.enum';
import { CARD_CLASS_MAP } from '../../models/arrange-type-class.map';

@Component({
  selector: 'lib-card-item',
  standalone: true,
  imports: [
    NgIf,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardItemComponent {
  /** 卡片风格 */
  @Input() style: CardStyle = CardStyle.SHADOW;
  /** 额外 class，用户可传入 */
  @Input() className = '';
  /** 排列方式 */
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  /** 卡片数据 */
  @Input() cardItem!: CardItem;

  /** 点击 tag 的事件 */
  @Output() tagClick = new EventEmitter<{ card: CardItem; tag: CardItemTag }>();
  /** 点击 button 的事件 */
  @Output() buttonClick = new EventEmitter<{ card: CardItem; button: CardItemButton }>();
  /** 点击整张卡片（避开 tag/button 区域） */
  @Output() cardClick = new EventEmitter<CardItem>();

  /** 根据 arrangeType、style、className 自动拼接 class */
  @HostBinding('class')
  get hostClass(): string {
    return [
      CARD_CLASS_MAP[this.arrangeType],
      `${this.style}-style`,
      this.className
    ]
      .filter(Boolean)
      .join(' ');
  }

  /** tag 点击 */
  onTagClick(tag: CardItemTag) {
    this.tagClick.emit({ card: this.cardItem, tag });
  }
  /** button 点击 */
  onButtonClick(button: CardItemButton) {
    this.buttonClick.emit({ card: this.cardItem, button });
  }

  /** 默认只在非 LIST 模式下显示 header */
  get shouldShowHeader(): boolean {
    return this.arrangeType !== ArrangeType.LIST;
  }

  /** 整张卡片点击（会排除内部的 tag/button） */
  @HostListener('click', ['$event'])
  onHostClick(e: MouseEvent) {
    const elm = (e.target as HTMLElement);
    if (
      elm.closest('lib-tag')    ||
      elm.closest('lib-button') ||
      elm.closest('.action')
    ) {
      return;
    }
    this.cardClick.emit(this.cardItem);
  }
}
