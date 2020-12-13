import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapoptionComponent } from './chapoption.component';

describe('ChapoptionComponent', () => {
  let component: ChapoptionComponent;
  let fixture: ComponentFixture<ChapoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
