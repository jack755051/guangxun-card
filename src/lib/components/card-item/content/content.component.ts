import {Component, EventEmitter, HostBinding, Input, Output, TemplateRef} from '@angular/core';
import {ArrangeType} from '../../../models/guangxun-card.enum';
import {CardItemTag} from '../../../models/guangxun-card.interface';
import {CONTENT_CLASS_MAP} from '../../../models/arrange-type-class.map';
import {NgIf,NgForOf} from '@angular/common';
import {TagComponent} from '../tag/tag.component';

@Component({
  selector: 'lib-content',
  imports: [
    NgIf,
    NgForOf,
    TagComponent
  ],
  standalone: true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  @Input() image?: string;
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() description: string = '';
  @Input() tags: CardItemTag[] | null = null;
  /** 額外 class，支援客製化 */
  @Input() className = '';
  @Input() tagTemplate?: TemplateRef<any>;

  @Output() tagClick = new EventEmitter<CardItemTag>();

  onTagClick(tag: CardItemTag) {
    this.tagClick.emit(tag);
  }

  trackById = (_: number, t: CardItemTag) => t.id ?? t.label;

  @HostBinding('class')
  get hostClass(): string {
    const baseClass = CONTENT_CLASS_MAP[this.arrangeType] ?? '';
    return [baseClass, this.className].filter(Boolean).join(' ');
  }

}
