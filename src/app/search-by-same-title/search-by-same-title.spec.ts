import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBySameTitle } from './search-by-same-title';

describe('SearchBySameTitle', () => {
  let component: SearchBySameTitle;
  let fixture: ComponentFixture<SearchBySameTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBySameTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBySameTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
