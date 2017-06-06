import { CalculatorAngularPage } from './app.po';

describe('calculator-angular App', () => {
  let page: CalculatorAngularPage;

  beforeEach(() => {
    page = new CalculatorAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
