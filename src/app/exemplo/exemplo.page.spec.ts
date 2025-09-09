import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExemploPage } from './exemplo.page';

describe('ExemploPage', () => {
  let component: ExemploPage;
  let fixture: ComponentFixture<ExemploPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
