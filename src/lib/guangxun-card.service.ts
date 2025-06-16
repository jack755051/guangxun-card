import { Injectable } from '@angular/core';
import {ToggleOption} from './models/toggle-option.interface';
import {ARRANGE_TYPE_META_MAP} from './models/arrange-type-class.map';
import {ArrangeType} from './models/guangxun-card.enum';

@Injectable({
  providedIn: 'root'
})
export class GuangxunCardService {
  getToggleOptions(): ToggleOption[] {
    return Object.entries(ARRANGE_TYPE_META_MAP)
      .filter(([_, meta]) => meta.showInToggle)
      .map(([key, meta]) => ({
        value: key as ArrangeType,
        icon: meta.icon,
        label: meta.label,
      }));
  }

  getMeta(type: ArrangeType) {
    return ARRANGE_TYPE_META_MAP[type];
  }
}
