import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../pressbooks-multiselect.js';

describe('PressbooksMultiselect', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(
      html`<pressbooks-multiselect></pressbooks-multiselect>`
    );

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(
      html`<pressbooks-multiselect></pressbooks-multiselect>`
    );
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(
      html`<pressbooks-multiselect
        title="attribute title"
      ></pressbooks-multiselect>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(
      html`<pressbooks-multiselect></pressbooks-multiselect>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
