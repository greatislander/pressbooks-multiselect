# \<pressbooks-multiselect>

[![Latest version](https://badgen.net/npm/v/@pressbooks/multiselect)](https://npmjs.com/package/@pressbooks/multiselect) [![MIT license](https://badgen.net/npm/license/@pressbooks/multiselect)](https://github.com/greatislander/pressbooks-multiselect/tree/main/LICENSE) 

A web component which enhances the native `<select multiple>` element, built with [Lit](https://lit.dev). This web
component follows the [open-wc](https://github.com/open-wc/open-wc) recommendations.

It owes a great debt to [prior work](https://github.com/microsoft/sonder-ui/tree/master/src/components/multiselect) and
[research](https://www.24a11y.com/2019/select-your-poison-part-2/) by Sarah Higley.

## Installation

```bash
npm i @pressbooks/multiselect
```

## Usage

Wrap a `<select>` element with the `multiple` attribute and a semantically valid label in the
`<pressbooks-multiselect>` tag.

```html
<script type="module">
  import '@pressbooks/multiselect/pressbooks-multiselect.js';
</script>

<pressbooks-multiselect>
  <label for="selections">Multiple Selections</label>
  <select id="selections" name="selections[]">
    <option value="option-1">Option 1</option>
    <!-- Et cetera. -->
  </select>
</pressbooks-multiselect>
```

If you wrap a single select or a select element without a valid label, the component will not render and your existing
markup will be displayed without modification.

If the `<select>` element has a relationship with a hint via the `aria-describedby` attribute, the hint will be attached
to the rendered component as well. If you'd like the hint to appear after the rendered component, add the `slot="after"`
attribute to it:

```html
<pressbooks-multiselect>
  <label for="selections">Multiple Selections</label>
  <select id="selections" name="selections[]" aria-describedby="selections-hint">
    <option value="option-1">Option 1</option>
    <!-- Et cetera. -->
  </select>
  <p id="selections-hint" slot="after">Pick some!</p>
</pressbooks-multiselect>
```


If you group options within the `<select>` using [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
elements, the multiselect will group options using the [ARIA grouped listbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/).

### Styling

Because this web component uses the Shadow Dom, styling is limited to modification via CSS custom properties. However,
[there are plenty to choose from](https://github.com/greatislander/pressbooks-multiselect/blob/a87fab1f7b3ea967b3ae6b58400ed863084326ee/src/PressbooksMultiselect.js#L4-L146).

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

## Publishing to NPM

As this is a scoped package it must be published by someone within the Pressbooks NPM organization and must use the `--access public` flag:

```bash
npm publish --access public
```
