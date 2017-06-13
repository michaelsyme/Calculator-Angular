import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angular Calculator'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Calculator');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular Calculator');
  }));

  it('should render an error when an incomplete equation is entered (Input: 1).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "1";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Please enter equations in operand operation operand format separated by space.');
  }));

  it('should render an error when an incomplete equation is entered (Input 1 +).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "1 +";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Please enter equations in operand operation operand format separated by space.');
  }));

  it('should render an error when an incorrect equation is entered (Input 1 + +).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "1 + +";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Invalid input pattern. Detected 2 operations together.');
  }));

  it('should render an error when an incorrect equation is entered (Input 1 1 +).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "1 1 +";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Invalid input pattern. Detected 2 operands together.');
  }));

  it('should render an error when an incorrect operand character is entered (Input 1 + b).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "1 + b";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('invalid operand or operation detected - b');
  }));

  it('should render an error when an incorrect operand character is entered (Input 1 = 1).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "1 = 1";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('invalid operand or operation detected - =');
  }));

  it('Valid Equation (Input 1 + 10).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "1 + 10";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: 11');
  }));

  it('Valid Equation (Input 1 - 1).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "1 - 1";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: 0');
  }));

  it('Valid Equation (Input 1 - 2).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "1 - 2";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: -1');
  }));

  it('Valid Equation (Input 3 * 5).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "3 * 5";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: 15');
  }));

  it('Valid Equation (Input 6 / 3).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "6 / 3";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: 2');
  }));

  it('Valid Equation (Input 3 / 6).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "3 / 6";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: 0.5');
  }));

  it('Valid Equation (Input 3 / 0).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "3 / 0";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: Infinity');
  }));

  it('Valid Equation (Input 3 ^ 6).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "3 ^ 6";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: 729');
  }));

  it('Valid Equation (Input 3000000 + 6000000).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "3000000 + 6000000";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: 9000000');
  }));

  it('Valid Equation (Input 3 + 6 + 9).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "3 + 6 + 9";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: 18');
  }));

  it('Valid Equation (Input 3 + 6 - 9).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "3 + 6 - 9";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: 0');
  }));

  it('Valid Equation (Input 3 * 3 / 9).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "3 * 3 / 9";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: 1');
  }));

  it('Valid Equation (Input 1 + 1 + 2 * 5).', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = "1 + 1 + 2 * 5";
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Result: 20');
  }));
});
