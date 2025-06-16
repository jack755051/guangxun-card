import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { ArrangeType } from './guangxun-card.enum';
import { CardItemHeaderAvatar } from './card.type';

export interface CardConfig {
  defaultArrangeType?: ArrangeType;
  showHeader?: boolean;
  customClassMap?: Partial<Record<ArrangeType, string>>;
}

//卡片
export interface Cards<T = any> {
  card: T[];
  arrangeType: ArrangeType;
}

export interface ArrangeTypeToggleItem {
  icon: IconDefinition;
}

// 卡片項目
export interface CardItem {
  header: CardItemHeader;
  content: CardItemContent;
  footer: CardItemFooter;
}

// 卡片項目頭部
export interface CardItemHeader {
  avatar: CardItemHeaderAvatar;
  title: string;
}

// 卡片項目內容
export interface CardItemContent {
  image?: string;
  title: string;
  subTitle: string;
  description: string;
  tag?: CardItemTag[];
}

// 卡片項目底部
export interface CardItemFooter {
  button?: CardItemButton[];
}

export interface CardItemTag {
  label: string;
  action: () => void;
  disabled?: boolean;
}

// 卡片項目按鈕
export interface CardItemButton {
  label: string;
  action: () => void;
  disabled?: boolean;
}

// -----
export interface ArrangeTypeMeta {
  icon: IconDefinition;
  showInToggle: boolean;
  label: string;
}
