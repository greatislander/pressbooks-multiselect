import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../pressbooks-multiselect.js';

describe('PressbooksMultiselect', () => {
  it('renders with minimum requirements', async () => {
    const el = await fixture(
      html`<pressbooks-multiselect>
        <label for="flavours">Flavours</label>
        <select name="flavours[]" id="flavours" multiple>
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="vanilla">Vanilla</option>
        </select>
      </pressbooks-multiselect>`,
    );

    expect(el.htmlId).to.equal('flavours');
    expect(el.label).to.equal('Flavours');
  });

  it('renders with a selection', async () => {
    const el = await fixture(
      html`<pressbooks-multiselect>
        <label for="flavours">Flavours</label>
        <select name="flavours[]" id="flavours" multiple>
          <option value="chocolate" selected>Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="vanilla">Vanilla</option>
        </select>
      </pressbooks-multiselect>`,
    );

    expect(el.selectedOptions).to.contain('chocolate');
  });

  it('renders with a hint', async () => {
    const el = await fixture(
      html`<pressbooks-multiselect>
        <label for="flavours">Flavours</label>
        <p id="flavours-hint">Tell us your favourite flavours.</p>
        <select
          name="flavours[]"
          id="flavours"
          multiple
          aria-describedby="flavours-hint"
        >
          <option value="chocolate" selected>Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="vanilla">Vanilla</option>
        </select>
      </pressbooks-multiselect>`,
    );

    expect(el.hint).to.equal('Tell us your favourite flavours.');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(
      html`<pressbooks-multiselect>
        <label for="flavours">Flavours</label>
        <select name="flavours[]" id="flavours" multiple>
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="vanilla">Vanilla</option>
        </select>
      </pressbooks-multiselect>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });

  it('renders with groups', async () => {
    const el = await fixture(
      html`<pressbooks-multiselect>
        <label for="flavours">Flavours</label>
        <select name="flavours[]" id="flavours" multiple>
          <optgroup label="Neapolitan">
            <option value="chocolate">Chocolate</option>
            <option value="strawberry">Strawberry</option>
            <option value="vanilla">Vanilla</option>
          </optgroup>
        </select>
      </pressbooks-multiselect>`,
    );

    expect(el.groups).to.contain('Neapolitan');
  });
});
