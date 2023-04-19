import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoonComponent } from './spoon.component';

describe('SpoonComponent', () => {
  let component: SpoonComponent;
  let fixture: ComponentFixture<SpoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
