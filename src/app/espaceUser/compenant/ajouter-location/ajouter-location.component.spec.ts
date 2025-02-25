import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLocationComponent } from './ajouter-location.component';

describe('AjouterLocationComponent', () => {
  let component: AjouterLocationComponent;
  let fixture: ComponentFixture<AjouterLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
