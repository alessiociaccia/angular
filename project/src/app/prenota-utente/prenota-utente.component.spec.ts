import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotaUtenteComponent } from './prenota-utente.component';

describe('PrenotaUtenteComponent', () => {
  let component: PrenotaUtenteComponent;
  let fixture: ComponentFixture<PrenotaUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenotaUtenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotaUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
