import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTitle } from './search-by-title';

describe('SearchByTitle', () => {
  let component: SearchByTitle;
  let fixture: ComponentFixture<SearchByTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
