import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarproductoComponent } from './consultarproducto.component';

describe('ConsultarproductoComponent', () => {
  let component: ConsultarproductoComponent;
  let fixture: ComponentFixture<ConsultarproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
