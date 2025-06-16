import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {CardItem, CardItemButton, CardItemTag} from '../../models/guangxun-card.interface';
import {CARD_CLASS_MAP} from '../../models/arrange-type-class.map';
import {CardItemHeaderAvatar, CardItemHeaderFaIcon, CardItemHeaderImage} from '../../models/card.type';
import {ArrangeType} from '../../models/guangxun-card.enum';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {NgIf} from '@angular/common';
@Component({
  selector: 'lib-card-item',
  imports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NgIf
  ],
  standalone: true,
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input() cardItem!: CardItem;
  private _arrangeType: ArrangeType = ArrangeType.LIST;
  @Input()
  set arrangeType(value: ArrangeType) {
    this._arrangeType = value;
    this._setHostClass(); // 設定 class
  }
  get arrangeType(): ArrangeType {
    return this._arrangeType;
  }
  @Output() tagClick = new EventEmitter<{ card: CardItem; tag: CardItemTag }>();
  @Output() buttonClick = new EventEmitter<{ card: CardItem; button: CardItemButton }>();
  @Output() cardClick = new EventEmitter<CardItem>();
  @HostBinding('class') hostClass = '';

  readonly ArrangeType = ArrangeType;
  private _setHostClass() {
    this.hostClass = this.getCardItemClass();
  }

  constructor() {}
  ngOnInit(): void {}

  // ---- 方法 start----

  onTagClick(tag: CardItemTag) {
    this.tagClick.emit({ card: this.cardItem, tag });
  }

  onButtonClick(button: CardItemButton) {
    this.buttonClick.emit({ card: this.cardItem, button });
  }

  get shouldShowHeader(): boolean {
    // TODO: 根據需求決定是否顯示 header
    // return this.arrangeType !== ArrangeType.LIST;
    return false;
  }

  // 判斷是否為 icon
  isAvatarIcon(avatar: CardItemHeaderAvatar): avatar is CardItemHeaderFaIcon {
    return (avatar as CardItemHeaderFaIcon).icon !== undefined;
  }

  isAvatarImage(avatar: CardItemHeaderAvatar): avatar is CardItemHeaderImage {
    return (avatar as CardItemHeaderImage).link !== undefined;
  }

  getCardItemClass(): string {
    return CARD_CLASS_MAP[this.arrangeType] ?? '';
  }

  onCardClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      target.closest('guangxun-button') ||
      target.closest('guangxun-tag') ||
      target.closest('.action')
    ) {
      return;
    }
    this.cardClick.emit(this.cardItem);
  }

}
