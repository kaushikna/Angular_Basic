import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudnetListComponent } from './studnet-list.component';

describe('StudnetListComponent', () => {
  let component: StudnetListComponent;
  let fixture: ComponentFixture<StudnetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudnetListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudnetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
