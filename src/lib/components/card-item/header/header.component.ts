import {ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef} from '@angular/core';
import {CardItemHeaderAvatar, CardItemHeaderFaIcon, CardItemHeaderImage} from '../../../models/card.type';
import {ArrangeType} from '../../../models/guangxun-card.enum';
import {HEADER_CLASS_MAP} from '../../../models/arrange-type-class.map';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgClass, NgIf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'lib-header',
  imports: [
    FaIconComponent,
    NgClass,
    NgIf,
    NgTemplateOutlet
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  /** 預設 Avatar 物件；如果想完全自定義可用 avatarTpl 覆寫 */
  @Input() avatar!: CardItemHeaderAvatar;
  /** 自定義模板（優先級更高） */
  @Input() avatarTpl?: TemplateRef<unknown>;
  @Input() title = '';
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;

  @HostBinding('class')
  get hostClass(): string {
    return HEADER_CLASS_MAP[this.arrangeType] ?? '';
  }

  get avatarClass(): string | string[] {
    return this.avatar && 'class' in this.avatar
      ? (this.avatar as { class?: string | string[] }).class ?? ''
      : '';
  }

  /** 判斷工具 */
  isAvatarIcon(avatar: CardItemHeaderAvatar): avatar is CardItemHeaderFaIcon {
    return (avatar as CardItemHeaderFaIcon).icon !== undefined;
  }

  isAvatarImage(avatar: CardItemHeaderAvatar): avatar is CardItemHeaderImage {
    return (avatar as CardItemHeaderImage).link !== undefined;
  }
}
