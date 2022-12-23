import { html } from 'lit';
import '../pressbooks-multiselect.js';

export default {
  title: 'PressbooksMultiselect',
  component: 'pressbooks-multiselect',
};

function Template({ slot }) {
  return html` <pressbooks-multiselect> ${slot} </pressbooks-multiselect> `;
}

export const Regular = Template.bind({});
Regular.args = {
  slot: html`<label for="dwarves">Dwarves</label>
    <select
      id="dwarves"
      name="dwarves[]"
      multiple
      aria-describedby="dwarves-hint"
    >
      <option value="thorin">Thorin</option>
      <option value="dwalin">Dwalin</option>
      <option value="balin">Balin</option>
      <option value="bifur">Bifur</option>
      <option value="bofur">Bofur</option>
      <option value="bombur">Bombur</option>
      <option value="fili">Fili</option>
      <option value="kili">Kili</option>
      <option value="oin">Oin</option>
      <option value="gloin">Gloin</option>
      <option value="nori">Nori</option>
      <option value="dori">Dori</option>
      <option value="ori">Ori</option>
    </select>`,
};

export const WithSelection = Template.bind({});
WithSelection.args = {
  slot: html`<label for="dwarves">Dwarves</label>
    <select
      id="dwarves"
      name="dwarves[]"
      multiple
      aria-describedby="dwarves-hint"
    >
      <option value="thorin">Thorin</option>
      <option value="dwalin">Dwalin</option>
      <option value="balin">Balin</option>
      <option value="bifur" selected>Bifur</option>
      <option value="bofur" selected>Bofur</option>
      <option value="bombur" selected>Bombur</option>
      <option value="fili">Fili</option>
      <option value="kili">Kili</option>
      <option value="oin">Oin</option>
      <option value="gloin">Gloin</option>
      <option value="nori">Nori</option>
      <option value="dori">Dori</option>
      <option value="ori">Ori</option>
    </select>`,
};


export const Hinted = Template.bind({});
Hinted.args = {
  slot: html`<label for="dwarves">Dwarves</label>
    <p id="dwarves-hint">Type to choose some dwarves.</p>
    <select
      id="dwarves"
      name="dwarves[]"
      multiple
      aria-describedby="dwarves-hint"
    >
      <option value="thorin">Thorin</option>
      <option value="dwalin">Dwalin</option>
      <option value="balin">Balin</option>
      <option value="bifur">Bifur</option>
      <option value="bofur">Bofur</option>
      <option value="bombur">Bombur</option>
      <option value="fili">Fili</option>
      <option value="kili">Kili</option>
      <option value="oin">Oin</option>
      <option value="gloin">Gloin</option>
      <option value="nori">Nori</option>
      <option value="dori">Dori</option>
      <option value="ori">Ori</option>
    </select>`,
};
