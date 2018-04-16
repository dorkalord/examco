import { ExamcoNgClientPage } from './app.po';

describe('examco-ng-client App', function() {
  let page: ExamcoNgClientPage;

  beforeEach(() => {
    page = new ExamcoNgClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
