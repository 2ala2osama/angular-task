import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecomponentComponent } from './sidecomponent.component';

describe('SidecomponentComponent', () => {
  let component: SidecomponentComponent;
  let fixture: ComponentFixture<SidecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
