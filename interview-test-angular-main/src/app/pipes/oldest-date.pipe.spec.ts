import { OldestDatePipe } from './oldest-date.pipe';

describe('OldestDatePipe', () => {
  it('create an instance', () => {
    const pipe = new OldestDatePipe();
    expect(pipe).toBeTruthy();
  });
});
