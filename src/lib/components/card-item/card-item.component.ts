import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output
} from '@angular/core';
import {CardItem, CardItemButton, CardItemTag} from '../../models/guangxun-card.interface';
import {CARD_CLASS_MAP} from '../../models/arrange-type-class.map';
import {CardItemHeaderAvatar, CardItemHeaderFaIcon, CardItemHeaderImage} from '../../models/card.type';
import {ArrangeType} from '../../models/guangxun-card.enum';
import {HeaderComponent} from './parts/header/header.component';
import {FooterComponent} from './parts/footer/footer.component';
import {ContentComponent} from './parts/content/content.component';
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
  styleUrls:['./card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardItemComponent {
  /* ---------------- Inputs ---------------- */
  @Input() className = '';

  private _item!: CardItem;
  @Input() set cardItem(v: CardItem) {
    this._item = v;
  }
  get cardItem(): CardItem {
    return this._item;
  }

  @Input() set arrangeType(v: ArrangeType) {
    this._arrangeType = v;
    this.updateHostClass();
  }
  get arrangeType(): ArrangeType {
    return this._arrangeType;
  }
  private _arrangeType: ArrangeType = ArrangeType.LIST;

  /* ---------------- Outputs ---------------- */
  @Output() tagClick    = new EventEmitter<{ card: CardItem; tag: CardItemTag }>();
  @Output() buttonClick = new EventEmitter<{ card: CardItem; button: CardItemButton }>();
  @Output() cardClick   = new EventEmitter<CardItem>();

  /* ---------------- Host class ---------------- */
  @HostBinding('class') hostClass = CARD_CLASS_MAP[this._arrangeType];

  // ---------------- Methods ----------------
  private updateHostClass(): void {
    this.hostClass = [CARD_CLASS_MAP[this.arrangeType], this.className].filter(Boolean).join(' ');
  }

  onTagClick(tag: CardItemTag) {
    this.tagClick.emit({ card: this.cardItem, tag });
  }
  onButtonClick(btn: CardItemButton) {
    this.buttonClick.emit({ card: this.cardItem, button: btn });
  }

  get shouldShowHeader(): boolean {
    return this.arrangeType !== ArrangeType.LIST;
  }

  @HostListener('click')
  onCardClick() {
    this.cardClick.emit(this.cardItem);
    console.log('Card clicked:', this.cardItem);
  }
}
