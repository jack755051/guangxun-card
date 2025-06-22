import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output
} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {CardItemTag} from '../../../../models/guangxun-card.interface';
import {ArrangeType} from '../../../../models/guangxun-card.enum';
import {TAG_CLASS_MAP} from '../../../../models/arrange-type-class.map';

@Component({
  selector: 'lib-tag',
  imports: [
    NgClass,
    NgIf
  ],
  standalone: true,
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements AfterContentInit {
  /** 傳進來的資料物件 */
  @Input({ required: true }) tag!: CardItemTag;
  /** 額外 class，給使用者客製化樣式 */
  @Input() extraClass = '';
  /** 目前排版型態 */
  @Input() arrangeType: ArrangeType = ArrangeType.LIST;
  /** 點擊事件向外拋 */
  @Output() tagSelected = new EventEmitter<CardItemTag>();
  /** 判斷是否有自定義 slot 內容 */
  hasCustomContent = false;
  @ContentChild('content', { static: false, read: ElementRef }) projectedContent?: ElementRef;
  /** 動態 Host class */
  @HostBinding('class')
  get hostClass() {
    return [TAG_CLASS_MAP[this.arrangeType] ?? '', this.extraClass].join(' ');
  }

  ngAfterContentInit() {
    this.hasCustomContent =
      !!this.projectedContent?.nativeElement?.textContent?.trim();
  }

  onClick(e: MouseEvent) {
    e.stopPropagation();
    if (this.tag.disabled) return;
    this.tagSelected.emit(this.tag);
    console.log('Tag clicked:', this.tag);
  }

  protected readonly TAG_CLASS_MAP = TAG_CLASS_MAP;
}
