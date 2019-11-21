/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DettaglioAnzianitaComponent } from './dettaglio-anzianita.component';

describe('DettaglioAnzianitaComponent', () => {
  let component: DettaglioAnzianitaComponent;
  let fixture: ComponentFixture<DettaglioAnzianitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioAnzianitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioAnzianitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
