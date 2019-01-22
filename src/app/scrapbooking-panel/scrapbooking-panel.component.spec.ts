import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapbookingPanelComponent } from './scrapbooking-panel.component';

describe('ScrapbookingPanelComponent', () => {
  let component: ScrapbookingPanelComponent;
  let fixture: ComponentFixture<ScrapbookingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapbookingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapbookingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
