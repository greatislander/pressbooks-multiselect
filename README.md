# \<pressbooks-multiselect>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

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
