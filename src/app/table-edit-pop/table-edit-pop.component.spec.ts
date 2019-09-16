import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEditPopComponent } from './table-edit-pop.component';

describe('TableEditPopComponent', () => {
  let component: TableEditPopComponent;
  let fixture: ComponentFixture<TableEditPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEditPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEditPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
