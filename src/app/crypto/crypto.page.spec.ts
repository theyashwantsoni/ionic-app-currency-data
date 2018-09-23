import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoPage } from './crypto.page';

describe('CryptoPage', () => {
  let component: CryptoPage;
  let fixture: ComponentFixture<CryptoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
