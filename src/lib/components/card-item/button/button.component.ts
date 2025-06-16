import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {CardItemButton} from '../../../models/guangxun-card.interface';
import {ArrangeType} from '../../../models/guangxun-card.enum';
import {BUTTON_CLASS_MAP} from '../../../models/arrange-type-class.map';
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
  @Input() button!: CardItemButton;
  @Input() className = '';
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  @Input() buttonTemplate?: TemplateRef<{ $implicit: CardItemButton }>;
  @Output() buttonClick = new EventEmitter<CardItemButton>();

  protected readonly BUTTON_CLASS_MAP = BUTTON_CLASS_MAP;

  onClick() {
    if (!this.button.disabled) {
      this.buttonClick.emit(this.button);
    }
  }
}
