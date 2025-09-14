import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePopup } from './delete-popup';

describe('DeletePopup', () => {
  let component: DeletePopup;
  let fixture: ComponentFixture<DeletePopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
