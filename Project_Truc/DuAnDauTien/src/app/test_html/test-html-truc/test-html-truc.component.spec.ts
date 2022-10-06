import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHtmlTrucComponent } from './test-html-truc.component';

describe('TestHtmlTrucComponent', () => {
  let component: TestHtmlTrucComponent;
  let fixture: ComponentFixture<TestHtmlTrucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHtmlTrucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHtmlTrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
