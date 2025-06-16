import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { CardArrangeTypeIcons } from './fa-icon';
import {ArrangeType} from './guangxun-card.enum';
import {ArrangeTypeMeta} from './guangxun-card.interface';

export const CARD_CLASS_MAP: Record<ArrangeType, string> = {
  [ArrangeType.GRID]: 'card-grid-style',
  [ArrangeType.CENTER_STACK]: 'card-center-stack-style',
  [ArrangeType.LIST]: 'card-list-style',
};

export const HEADER_CLASS_MAP: Record<ArrangeType, string> = {
  [ArrangeType.GRID]: 'header-grid-style',
  [ArrangeType.CENTER_STACK]: 'header-center-stack-style',
  [ArrangeType.LIST]: 'header-list-style',
};

export const CONTENT_CLASS_MAP: Record<ArrangeType, string> = {
  [ArrangeType.GRID]: 'content-grid-style',
  [ArrangeType.CENTER_STACK]: 'content-center-stack-style',
  [ArrangeType.LIST]: 'content-list-style',
};

export const FOOTER_CLASS_MAP: Record<ArrangeType, string> = {
  [ArrangeType.GRID]: 'footer-grid-style',
  [ArrangeType.CENTER_STACK]: 'footer-center-stack-style',
  [ArrangeType.LIST]: 'footer-list-style',
};

export const TAG_CLASS_MAP: Record<ArrangeType, string> = {
  [ArrangeType.GRID]: 'tag-grid-style',
  [ArrangeType.CENTER_STACK]: 'tag-center-stack-style',
  [ArrangeType.LIST]: 'tag-list-style',
};

export const BUTTON_CLASS_MAP: Record<ArrangeType, string> = {
  [ArrangeType.GRID]: 'button-grid-style',
  [ArrangeType.CENTER_STACK]: 'button-center-stack-style',
  [ArrangeType.LIST]: 'button-list-style',
};

// 排列方式圖示

export const ARRANGE_TYPE_ICON_MAP: Record<ArrangeType, IconDefinition> = {
  [ArrangeType.GRID]: CardArrangeTypeIcons.faBorderAll,
  [ArrangeType.LIST]: CardArrangeTypeIcons.faList,
  [ArrangeType.CENTER_STACK]: CardArrangeTypeIcons.faLayerGroup,
};

export const ARRANGE_TYPE_SHOW_TOGGLE_MAP: Record<ArrangeType, boolean> = {
  [ArrangeType.GRID]: true,
  [ArrangeType.LIST]: true,
  [ArrangeType.CENTER_STACK]: false,
};
// 排列方式元資料，判斷是否顯示
export const ARRANGE_TYPE_META_MAP: Record<ArrangeType, ArrangeTypeMeta> = {
  [ArrangeType.GRID]: {
    icon: CardArrangeTypeIcons.faBorderAll,
    showInToggle: true,
    label: '網格',
  },
  [ArrangeType.LIST]: {
    icon: CardArrangeTypeIcons.faList,
    showInToggle: true,
    label: '清單',
  },
  [ArrangeType.CENTER_STACK]: {
    icon: CardArrangeTypeIcons.faLayerGroup,
    showInToggle: false,
    label: '堆疊',
  },
};
