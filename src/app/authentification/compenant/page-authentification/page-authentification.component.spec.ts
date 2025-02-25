import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuthentificationComponent } from './page-authentification.component';

describe('PagePrincipaleComponent', () => {
  let component: PageAuthentificationComponent;
  let fixture: ComponentFixture<PageAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAuthentificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
