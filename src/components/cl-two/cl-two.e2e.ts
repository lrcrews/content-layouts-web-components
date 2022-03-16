import { newE2EPage } from '@stencil/core/testing';

describe('cl-two', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cl-two></cl-two>');

    const element = await page.find('cl-two');
    expect(element).toHaveClass('hydrated');
  });
});
