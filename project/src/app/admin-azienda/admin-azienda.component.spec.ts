import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAziendaComponent } from './admin-azienda.component';

describe('AdminAziendaComponent', () => {
  let component: AdminAziendaComponent;
  let fixture: ComponentFixture<AdminAziendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAziendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
