import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserComponent } from './page-user.component';

describe('NavBareComponent', () => {
  let component: PageUserComponent;
  let fixture: ComponentFixture<PageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
