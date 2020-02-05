/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScolaritaComponent } from './scolarita.component';

describe('ScolaritaComponent', () => {
  let component: ScolaritaComponent;
  let fixture: ComponentFixture<ScolaritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScolaritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScolaritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
