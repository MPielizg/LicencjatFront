import { MessageExchangerFrontPage } from './app.po';

describe('message-exchanger-front App', () => {
  let page: MessageExchangerFrontPage;

  beforeEach(() => {
    page = new MessageExchangerFrontPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
