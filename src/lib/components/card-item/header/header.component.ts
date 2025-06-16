import {Component, HostBinding, Input} from '@angular/core';
import {CardItemHeaderAvatar, CardItemHeaderFaIcon, CardItemHeaderImage} from '../../../models/card.type';
import {ArrangeType} from '../../../models/guangxun-card.enum';
import {HEADER_CLASS_MAP} from '../../../models/arrange-type-class.map';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'lib-header',
  imports: [
    FaIconComponent,
    NgClass,
    NgIf
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() avatar!: CardItemHeaderAvatar;
  @Input() title!: string;
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;

  @HostBinding('class')
  get hostClass(): string {
    return HEADER_CLASS_MAP[this.arrangeType] ?? '';
  }

  get avatarClass(): string | string[] {
    return (this.avatar as any)?.class ?? '';
  }

  isAvatarIcon(avatar: CardItemHeaderAvatar): avatar is CardItemHeaderFaIcon {
    return (avatar as CardItemHeaderFaIcon).icon !== undefined;
  }

  isAvatarImage(avatar: CardItemHeaderAvatar): avatar is CardItemHeaderImage {
    return (avatar as CardItemHeaderImage).link !== undefined;
  }
}
