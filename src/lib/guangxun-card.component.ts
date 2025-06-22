import {Component, EventEmitter, inject, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CardItem, CardItemButton, CardItemTag, Cards} from './models/guangxun-card.interface';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {ToggleOption} from './models/toggle-option.interface';
import {ARRANGE_TYPE_META_MAP} from './models/arrange-type-class.map';
import {ArrangeType, CardStyle} from './models/guangxun-card.enum';
import {CardArrangeTypeIcons} from './models/fa-icon';
import {GuangxunCardService} from './guangxun-card.service';
import {CardItemComponent} from './components/card-item/card-item.component';
import { NgClass, NgIf, NgTemplateOutlet, NgForOf } from '@angular/common';
import {ToggleComponent} from './components/toggle/toggle.component';

@Component({
  selector: 'lib-guangxun-card',
  imports: [RouterLink, CardItemComponent, NgTemplateOutlet, NgIf, NgClass,NgForOf, ToggleComponent],
  standalone: true,
  templateUrl:'./guangxun-card.component.html',
  styleUrls: ['./guangxun-card.component.scss'],
})
export class GuangxunCardComponent <T extends CardItem = CardItem> implements OnInit{
  // 卡片
  @Input() cards!: Cards<T>;
  @Input() cardTemplate!: TemplateRef<any>;
  @Input() centerIndex: number = 0;
  // 操作功能
  @Output() arrangeTypeChange = new EventEmitter<ArrangeType>();
  @Output() tagClick = new EventEmitter<{ card: CardItem; tag: CardItemTag }>();
  @Output() buttonClick = new EventEmitter<{ card: CardItem; button: CardItemButton }>();
  @Output() cardClick = new EventEmitter<CardItem>();

  _cardService = inject(GuangxunCardService);
  // 是否顯示排列方式
  isShowArrangeType: boolean = false;
  // 排列方式圖示
  arrangeTypeIcon: IconDefinition = CardArrangeTypeIcons.faList;
  // 排列方式
  ArrangeType = ArrangeType;

  toggleOptions: ToggleOption[] = [];

  constructor() {}

  ngOnInit(): void {
    if (!this.cards) return;
    const meta = this._cardService.getMeta(this.cards.arrangeType);

    this.isShowArrangeType = meta.showInToggle;
    this.arrangeTypeIcon = meta.icon;
    this.toggleOptions = this._cardService.getToggleOptions();
  }

  onArrangeTypeToggle(arrangeType: ArrangeType) {
    this.cards.arrangeType = arrangeType;
    this.arrangeTypeChange.emit(arrangeType);
  }

  getContainerClass(type: ArrangeType): string {
    return `card-${type}`;
  }

  isCenterCard(index: number): boolean {
    return this.cards.arrangeType === ArrangeType.CENTER_STACK && index === this.centerIndex;
  }

  isCardItemType(card: unknown): card is CardItem {
    return (
      !!(card as CardItem)?.header && !!(card as CardItem)?.content && !!(card as CardItem)?.footer
    );
  }

  protected readonly CardStyle = CardStyle;
}
