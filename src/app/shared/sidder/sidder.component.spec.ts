import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidderComponent } from './sidder.component';

describe('SidderComponent', () => {
  let component: SidderComponent;
  let fixture: ComponentFixture<SidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
