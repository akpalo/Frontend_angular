import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaskinComponent } from './laskin.component';

describe('LaskinComponent', () => {
  let component: LaskinComponent;
  let fixture: ComponentFixture<LaskinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaskinComponent]
    });
    fixture = TestBed.createComponent(LaskinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


