import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneeCapteurListComponent } from './donnee-capteur-list.component';

describe('DonneeCapteurListComponent', () => {
  let component: DonneeCapteurListComponent;
  let fixture: ComponentFixture<DonneeCapteurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonneeCapteurListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonneeCapteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
