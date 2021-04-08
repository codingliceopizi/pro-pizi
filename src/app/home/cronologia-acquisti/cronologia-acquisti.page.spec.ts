import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CronologiaAcquistiPage } from './cronologia-acquisti.page';

describe('CronologiaAcquistiPage', () => {
  let component: CronologiaAcquistiPage;
  let fixture: ComponentFixture<CronologiaAcquistiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CronologiaAcquistiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CronologiaAcquistiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
