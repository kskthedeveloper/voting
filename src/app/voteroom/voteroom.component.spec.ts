import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteroomComponent } from './voteroom.component';

describe('VoteroomComponent', () => {
  let component: VoteroomComponent;
  let fixture: ComponentFixture<VoteroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
