import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilepageComponent } from './userprofilepage.component';

describe('UserprofilepageComponent', () => {
  let component: UserprofilepageComponent;
  let fixture: ComponentFixture<UserprofilepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserprofilepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprofilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
