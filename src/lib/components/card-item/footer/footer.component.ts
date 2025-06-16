import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {ArrangeType} from '../../../models/guangxun-card.enum';
import {CardItemButton} from '../../../models/guangxun-card.interface';
import {FOOTER_CLASS_MAP} from '../../../models/arrange-type-class.map';
import {ButtonComponent} from '../button/button.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'lib-footer',
  imports: [
    ButtonComponent,
    NgForOf
  ],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  @Input() className = '';
  @Input() actions?: CardItemButton[] = [];
  @Output() buttonClick = new EventEmitter<CardItemButton>();

  onButtonClick(button: CardItemButton) {
    this.buttonClick.emit(button);
  }

  @HostBinding('class')
  get hostClass(): string {
    return FOOTER_CLASS_MAP[this.arrangeType] ?? '';
  }
}
