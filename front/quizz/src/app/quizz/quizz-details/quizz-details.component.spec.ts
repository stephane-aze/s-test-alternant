import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzDetailsComponent } from './quizz-details.component';

describe('QuizzDetailsComponent', () => {
  let component: QuizzDetailsComponent;
  let fixture: ComponentFixture<QuizzDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
