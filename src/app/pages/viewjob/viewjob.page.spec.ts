import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewjobPage } from './viewjob.page';

describe('ViewjobPage', () => {
  let component: ViewjobPage;
  let fixture: ComponentFixture<ViewjobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewjobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
