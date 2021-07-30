import { NewestDatePipe } from './newest-date.pipe';

describe('NewestDatePipe', () => {
  it('create an instance', () => {
    const pipe = new NewestDatePipe();
    expect(pipe).toBeTruthy();
  });
});
