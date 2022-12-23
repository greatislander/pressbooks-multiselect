import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../pressbooks-multiselect.js';

describe('PressbooksMultiselect', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture(
      html`<pressbooks-multiselect>
        <label for="flavours">Flavours</label>
        <select name="flavours[]" id="flavours" multiple>
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="vanilla">Vanilla</option>
        </select>
      </pressbooks-multiselect>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
