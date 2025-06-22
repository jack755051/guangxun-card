import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {CardItemButton} from '../../../../models/guangxun-card.interface';
import {ArrangeType} from '../../../../models/guangxun-card.enum';
import {BUTTON_CLASS_MAP} from '../../../../models/arrange-type-class.map';
import {NgClass, NgIf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'lib-button',
  imports: [
    NgClass,
    NgIf,
    NgTemplateOutlet
  ],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  /** 傳進來的資料物件 */
  @Input() button!: CardItemButton;
  /** 額外 class，給使用者客製化樣式 */
  @Input() className = '';
  /** 目前排版型態 */
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  @Input() buttonTemplate?: TemplateRef<{ $implicit: CardItemButton }>;
  @Output() buttonClick = new EventEmitter<CardItemButton>();

  protected readonly BUTTON_CLASS_MAP = BUTTON_CLASS_MAP;

  onClick(e: MouseEvent) {
    e.stopPropagation();
    if (this.button.disabled) return;
    this.buttonClick.emit(this.button);
    console.log('Button clicked:', this.button);
  }
}
