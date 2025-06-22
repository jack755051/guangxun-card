from pathlib import Path

readme_content = """# @sanring/guangxun-card

> 一套可高度配置的卡片布局组件（Angular Standalone + OnPush 支援泛型）

[![npm version](https://img.shields.io/npm/v/@sanring/guangxun-card)](https://www.npmjs.com/package/@sanring/guangxun-card)
[![License](https://img.shields.io/npm/l/@sanring/guangxun-card)](LICENSE)

---

## 📦 安裝

```bash
# 使用 npm
npm install @sanring/guangxun-card

# 使用 yarn
yarn add @sanring/guangxun-card
```

---

## 🚀 快速上手

```html
<!-- template -->
<lib-guangxun-card
  [cards]="cards"
  [style]="CardStyle.GLASS"
  (tagClick)="onTagClicked($event)"
  (buttonClick)="onButtonClicked($event)"
  (cardClick)="onCardClicked($event)"
></lib-guangxun-card>
```

```ts
// component.ts
import {
  ArrangeType,
  CardItem,
  CardItemTag,
  CardItemButton,
  Cards,
  CardStyle
} from '@sanring/guangxun-card';

cards: Cards<CardItem> = {
  arrangeType: ArrangeType.GRID,
  card: [
    {
      header: { avatar: { icon: ['fas', 'user'] }, title: '使用者名稱' },
      content: {
        title: '內容標題',
        subTitle: '副標題',
        description: '描述內容',
        tag: [{ label: 'Tag A', action: () => alert('tag clicked') }]
      },
      footer: {
        button: [{ label: '查看更多', action: () => alert('button clicked') }]
      }
    }
  ]
};

onTagClicked(event: { card: CardItem; tag: CardItemTag }) {}
onButtonClicked(event: { card: CardItem; button: CardItemButton }) {}
onCardClicked(card: CardItem) {}
```

---

## 🧩 API 參考

| 屬性 / 事件 | 類型 | 說明 |
|-------------|------|------|
| `@Input() cards` | `Cards<T>` | ✅ 必填。卡片資料結構 |
| `@Input() cardTemplate` | `TemplateRef<{ $implicit: T; index: number }>` | 自定義卡片模板 |
| `@Input() style` | `CardStyle` | 卡片樣式。預設為 `SHADOW` |
| `@Output() tagClick` | `EventEmitter<{ card: T; tag: CardItemTag }>` | 點擊 Tag 時觸發 |
| `@Output() buttonClick` | `EventEmitter<{ card: T; button: CardItemButton }>` | 點擊按鈕時觸發 |
| `@Output() cardClick` | `EventEmitter<T>` | 點擊卡片空白區域時觸發 |

---

## 📦 可匯入型別與 Enum

你可以從套件中匯入以下型別：

```ts
import {
  Cards,
  CardItem,
  CardItemTag,
  CardItemButton,
  CardStyle,
  ArrangeType,
  CardConfig,
  ArrangeTypeMeta
} from '@sanring/guangxun-card';
```

### 🧾 Cards<T>

```ts
export interface Cards<T = any> {
  card: T[];
  arrangeType: ArrangeType;
}
```

支援泛型，你可以擴充：

```ts
interface CustomCard extends CardItem {
  extraNote: string;
}

const cards: Cards<CustomCard> = {
  arrangeType: ArrangeType.LIST,
  card: [
    {
      header: { avatar: { icon: ['fas', 'user'] }, title: 'Title' },
      content: { title: '內容', subTitle: '副標題', description: '描述' },
      footer: { button: [{ label: 'Click', action: () => {} }] },
      extraNote: '備註'
    }
  ]
};
```

---

## 🎴 CardItem 結構說明

```ts
export interface CardItem {
  header: CardItemHeader;
  content: CardItemContent;
  footer: CardItemFooter;
}
```

### CardItemHeader

```ts
interface CardItemHeader {
  avatar: CardItemHeaderAvatar;
  title: string;
}
```

### CardItemContent

```ts
interface CardItemContent {
  image?: string;
  title: string;
  subTitle: string;
  description: string;
  tag?: CardItemTag[];
}
```

### CardItemFooter

```ts
interface CardItemFooter {
  button?: CardItemButton[];
}
```

### CardItemButton / CardItemTag

```ts
export interface CardItemClickEvent {
  id?: string;
  label: string;
  action: () => void;
  disabled?: boolean;
}

export interface CardItemTag extends CardItemClickEvent {}
export interface CardItemButton extends CardItemClickEvent {}
```

---

## 🎨 列舉（Enum）

### ArrangeType

```ts
export enum ArrangeType {
  CENTER_STACK = 'center-stack',
  GRID = 'grid',
  LIST = 'list',
}
```

### CardStyle

```ts
export enum CardStyle {
  SHADOW  = 'shadow',
  FLOAT   = 'float',
  GLASS   = 'glass',
  MINIMAL = 'minimal',
  COLORED = 'colored',
  THREE_D = 'three-d'
}
```

---

## 🧪 單元測試

```bash
ng test
```

---

## 📝 版本紀錄

查看 [CHANGELOG.md](./CHANGELOG.md)

---

## 🪪 授權 License

[MIT](./LICENSE)
"""

# Save to a Markdown file
output_path = Path("/mnt/data/README.md")
output_path.write_text(readme_content, encoding="utf-8")

output_path
