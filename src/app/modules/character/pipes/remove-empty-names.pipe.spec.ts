import { RemoveEmptyNamesPipe } from './remove-empty-names.pipe';

describe('RemoveEmptyNamesPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveEmptyNamesPipe();
    expect(pipe).toBeTruthy();
  });
});
