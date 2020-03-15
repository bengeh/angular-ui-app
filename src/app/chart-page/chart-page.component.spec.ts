import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ChartPageComponent } from './chart-page.component';

class RouterStub{
  getCurrentNavigation(){
    return {
       extras: {
          state:[{
            2010: 3,
            2011: 4,
            2013: 6
          }]
        }
      }
    }
 }

describe('ChartPageComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ChartPageComponent ],
      providers: [ {provide: Router, useClass: RouterStub}]
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ChartPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the graph', () => {
    const fixture = TestBed.createComponent(ChartPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    console.log("THE COMPILED COMING FROM CHART PAGE TEST...", compiled.querySelector('#barChart').style.display)
    expect(compiled.querySelector('#barChart').style.display).toBe('block');
  });
  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
