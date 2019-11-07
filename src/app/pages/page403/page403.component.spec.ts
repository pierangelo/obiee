/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Page403Component } from './page403.component';

describe('Page403Component', () => {
  let component: Page403Component;
  let fixture: ComponentFixture<Page403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
