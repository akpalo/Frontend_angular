import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenttiComponent } from './komponentti.component';

describe('KomponenttiComponent', () => {
  let component: KomponenttiComponent;
  let fixture: ComponentFixture<KomponenttiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KomponenttiComponent]
    });
    fixture = TestBed.createComponent(KomponenttiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
