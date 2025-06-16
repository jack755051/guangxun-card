import { InjectionToken } from '@angular/core';
import {CardConfig} from './models/guangxun-card.interface';

/** 讓使用者在 `providers` 注入自己的設定用 */
export const CARD_CONFIG = new InjectionToken<CardConfig>('CARD_CONFIG');
