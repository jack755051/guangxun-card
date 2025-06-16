import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuangxunCardComponent } from './guangxun-card.component';

describe('GuangxunCardComponent', () => {
  let component: GuangxunCardComponent;
  let fixture: ComponentFixture<GuangxunCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuangxunCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuangxunCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
