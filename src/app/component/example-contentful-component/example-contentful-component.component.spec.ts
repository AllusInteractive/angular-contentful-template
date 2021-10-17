import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleContentfulComponentComponent } from './example-contentful-component.component';

describe('ExampleContentfulComponentComponent', () => {
  let component: ExampleContentfulComponentComponent;
  let fixture: ComponentFixture<ExampleContentfulComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleContentfulComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleContentfulComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
