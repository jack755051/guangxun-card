import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToggleOption} from '../../models/toggle-option.interface';
import {ArrangeType} from '../../models/guangxun-card.enum';
import {ARRANGE_TYPE_META_MAP} from '../../models/arrange-type-class.map';
import {FaIconComponent, IconDefinition} from '@fortawesome/angular-fontawesome';

import {NgForOf} from '@angular/common';

@Component({
  selector: 'lib-toggle',
  imports: [
    FaIconComponent,
    NgForOf
  ],
  standalone: true,
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  @Input() options: ToggleOption[] = [];
  @Input() selected!: ArrangeType;
  @Output() change = new EventEmitter<ArrangeType>();

  getIcon(type: ArrangeType): IconDefinition | undefined {
    return ARRANGE_TYPE_META_MAP[type]?.icon;
  }

  // ✅ 這裡傳進來的是 ToggleOption，而不是 ArrangeType
  onSelect(option: ToggleOption) {
    this.change.emit(option.value); // 只發出其中的 ArrangeType
  }
}
