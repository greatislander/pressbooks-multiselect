import { html, css, nothing, LitElement } from 'lit';

export class PressbooksMultiselect extends LitElement {
  static get styles() {
    return css`
      :host {
        font-size: var(--pb-multiselect-font-size, 1rem);
      }

      * {
        box-sizing: border-box;
      }

      .hidden {
        display: none;
      }

      .selected-options {
        list-style-type: none;
        display: flex;
        gap: 0.5rem;
        padding-inline-start: 0;
      }

      .selected-options button {
        align-items: center;
        appearance: none;
        background: var(--pb-button-secondary-background, #f6f7f7);
        border-radius: var(--pb-button-border-radius, 3px);
        border: var(--pb-button-secondary-border, 1px #d4002d solid);
        color: var(--pb-button-secondary-color, #d4002d);
        cursor: pointer;
        display: inline-flex;
        font-size: var(--pb-button-font-size, 13px);
        font-family: var(--pb-button-font-family, inherit);
        gap: var(--pb-button-gap, 0.125em);
        line-height: var(--pb-button-line-height, 2.15384615);
        margin: 0;
        min-height: var(--pb-button-min-height, 30px);
        padding: var(--pb-button-padding, 0 10px);
        text-decoration: none;
        white-space: nowrap;
      }

      .selected-options button:hover {
        background: var(--pb-button-secondary-background-hover, #f0f0f1);
        border-color: var(--pb-button-secondary-border-color-hover, #a10022);
        color: var(--pb-button-secondary-color-hover, #a10022);
      }

      .selected-options button:focus {
        border-color: var(--pb-button-secondary-border-color-focus, #ff083c);
        box-shadow: var(
          --pb-button-secondary-box-shadow-focus,
          0 0 0 1px #ff083c
        );
        color: var(--pb-button-secondary-color-focus, #6e0017);
        outline: var(
          --pb-button-secondary-outline-focus,
          2px solid transparent
        );
        outline-offset: 0;
      }

      .selected-options button:active {
        background: var(--pb-button-secondary-background-active, #f6f7f7);
        border-color: var(--pb-button-secondary-border-color-active, #7e8993);
        box-shadow: none;
        color: var(--pb-button-secondary-color-active, #262a2e);
      }

      .selected-options button svg {
        width: var(--pb-button-icon-size, 1.25em);
        height: var(--pb-button-icon-size, 1.25em);
      }

      input {
        background-color: var(--pb-input-background-color, #fff);
        border-radius: var(--pb-input-border-radius, 4px);
        border: var(--pb-input-border, 1px solid #8c8f94);
        box-shadow: var(--pb-input-box-shadow, 0 0 0 transparent);
        color: var(--pb-input-color, #2c3338);
        font-size: var(--pb-input-font-size, 14px);
        line-height: var(--pb-input-line-height, 2);
        min-height: var(--pb-input-min-height, 30px);
        padding: var(--pb-input-padding, 0 8px);
        width: var(--pb-input-width, 100%);
      }

      input:focus {
        border-color: var(--pb-input-border-color-focus, #d4002d);
        box-shadow: var(--pb-input-box-shadow-focus, 0 0 0 1px #d4002d);
        outline: var(--pb-input-outline-focus, 2px solid transparent);
      }

      input.combo-open {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }

      .combo-menu {
        width: 100%;
        box-sizing: border-box;
        border-bottom: var(--pb-combo-menu-border, 1px solid #8c8f94);
        border-left: var(--pb-combo-menu-border, 1px solid #8c8f94);
        border-right: var(--pb-combo-menu-border, 1px solid #8c8f94);
        box-shadow: 0;
        border-bottom-left-radius: var(--pb-combo-menu-border-radius, 4px);
        border-bottom-right-radius: var(--pb-combo-menu-border-radius, 4px);
      }

      input:focus + .combo-menu {
        border-color: var(--pb-input-border-color-focus, #d4002d);
        box-shadow: var(--pb-input-box-shadow-focus, 0 0 0 1px #d4002d);
      }

      .combo-option {
        background: var(--pb-combo-option-background, #fff);
        cursor: default;
        padding: var(--pb-combo-option-padding, 0.25rem 0.5rem);
        font-family: var(--pb-combo-option-font-family, inherit);
      }

      .combo-option:hover,
      .combo-option.option-current {
        background: var(--pb-combo-option-background-hover, #dedede);
        color: var(--pb-combo-option-color-hover, #000);
      }

      .combo-option:active,
      .combo-option:active:hover {
        background: var(--pb-combo-option-background-active, #333);
        color: var(--pb-combo-option-color-active, #fff);
      }

      .combo-option[aria-selected='true'] {
        background: var(--pb-combo-option-background-selected, #d4002d);
        color: var(--pb-combo-option-color-selected, #fff);
      }

      .combo-option:last-of-type {
        border-bottom-left-radius: var(--pb-combo-menu-border-radius, 3px);
        border-bottom-right-radius: var(--pb-combo-menu-border-radius, 3px);
      }
    `;
  }

  static get properties() {
    return {
      htmlId: { type: String },
      label: { type: String },
      hint: { type: String },
      activeIndex: { type: Number },
      value: { type: String },
      open: { type: Boolean },
      options: { type: Object },
      selectedOptions: { type: Array },
      filteredOptions: { type: Object },
      MenuActions: { type: Object },
      Keys: { type: Object },
    };
  }

  constructor() {
    super();
    this.htmlId = '';
    this.activeIndex = 0;
    this.value = '';
    this.open = false;
    this.options = {};
    this.selectedOptions = [];
    this.filteredOptions = {};
    this.MenuActions = {
      Close: 'Close',
      CloseSelect: 'CloseSelect',
      First: 'First',
      Last: 'Last',
      Next: 'Next',
      Open: 'Open',
      PageDown: 'PageDown',
      PageUp: 'PageUp',
      Previous: 'Previous',
      Select: 'Select',
      Space: 'Space',
      Type: 'Type',
    };
    this.Keys = {
      Backspace: 'Backspace',
      Clear: 'Clear',
      Down: 'ArrowDown',
      End: 'End',
      Enter: 'Enter',
      Escape: 'Escape',
      Home: 'Home',
      Left: 'ArrowLeft',
      PageDown: 'PageDown',
      PageUp: 'PageUp',
      Right: 'ArrowRight',
      Space: ' ',
      Tab: 'Tab',
      Up: 'ArrowUp',
    };
  }

  get _label() {
    const slot = this.shadowRoot.querySelector('slot');
    return slot.assignedElements().filter(node => node.matches('label'))[0];
  }

  get _select() {
    const slot = this.shadowRoot.querySelector('slot');
    return slot
      .assignedElements()
      .filter(node => node.matches('select[multiple]'))[0];
  }

  get _hint() {
    const slot = this.shadowRoot.querySelector('slot');
    if (this._select.getAttribute('aria-describedby')) {
      const hintId = this._select.getAttribute('aria-describedby');
      return slot
        .assignedElements()
        .filter(node => node.matches(`#${hintId}`))[0];
    }

    return false;
  }

  render() {
    return html`
      <div class="multiselect">
        <slot></slot>
        <ul class="selected-options">
          <span id="${this.htmlId}-remove" hidden>remove</span>
          ${this.selectedOptions.map(
            option => html`<li>
              <button
                class="remove-option"
                type="button"
                aria-describedby="${this.htmlId}-remove"
                data-option="${option}"
                @click="${this.handleRemove}"
              >
                <span>${this.options[option]}</span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  role="presentation"
                  fill="currentColor"
                >
                  <path
                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                  />
                </svg>
              </button>
            </li>`
          )}
        </ul>
        <div>
          <span id="${this.htmlId}-hint" hidden>${this.hint ?? nothing}</span>
          <input
            aria-controls="${this.htmlId}-listbox"
            aria-activedescendant="${this.htmlId}-${this.activeIndex}"
            aria-autocomplete="list"
            aria-expanded="${this.open}"
            aria-haspopup="listbox"
            aria-label="${this.label}"
            aria-describedby="${this.htmlId}-hint"
            class="combo-input${this.open ? ' combo-open' : ''}"
            role="combobox"
            type="text"
            @input="${this.handleInput}"
            @focus="${this.handleInputFocus}"
            @keydown="${this.handleInputKeydown}"
          />
          <div
            class="combo-menu ${this.open ? '' : 'hidden'}"
            role="listbox"
            aria-multiselectable="true"
            id="${this.htmlId}-listbox"
          >
            ${Object.keys(this.filteredOptions).map(
              (option, index) =>
                // eslint-disable-next-line lit-a11y/click-events-have-key-events
                html` <div
                  class="combo-option ${this.activeIndex === index
                    ? 'option-current'
                    : ''}"
                  id="${this.htmlId}-${index}"
                  aria-selected="${this.selectedOptions.indexOf(option) > -1}"
                  role="option"
                  data-option="${option}"
                  @click="${this.handleOptionClick}"
                  @mouseDown="${this.handleOptionMouseDown}"
                >
                  ${this.options[option]}
                </div>`
            )}
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', this._handleWindowClick.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('click', this._handleWindowClick.bind(this));
    super.disconnectedCallback();
  }

  firstUpdated() {
    this._select.hidden = true;
    this.htmlId = this._select.id;
    this.label = this._label.innerText;
    this.hint = this._hint.innerText;
    this.options = Object.fromEntries(
      Array.from(this._select.querySelectorAll('option')).map(el => [
        el.value,
        el.textContent,
      ])
    );
    this.selectedOptions = Array.from(
      this._select.querySelectorAll('option[selected]')
    ).map(el => el.value);
    this.filteredOptions = this.options;
  }

  _handleWindowClick(event) {
    if (
      !this.shadowRoot.contains(event.target) &&
      !this.contains(event.target)
    ) {
      this.open = false;
      this.update();
    }
  }

  addOption(option) {
    this._select
      .querySelector(`option[value="${option}"]`)
      .setAttribute('selected', true);
    this.selectedOptions.push(option);
  }

  removeOption(option) {
    this._select
      .querySelector(`option[value="${option}"]`)
      .removeAttribute('selected');
    this.selectedOptions.splice(this.selectedOptions.indexOf(option), 1);
  }

  updateMenuState(open) {
    this.open = open;
  }

  getUpdatedIndex(current, max, action) {
    switch (action) {
      case this.MenuActions.First:
        return 0;
      case this.MenuActions.Last:
        return max;
      case this.MenuActions.Previous:
        return Math.max(0, current - 1);
      case this.MenuActions.Next:
        return Math.min(max, current + 1);
      default:
        return current;
    }
  }

  updateIndex(index) {
    this.activeIndex = index;
    this.requestUpdate();
  }

  handleRemove(event) {
    const { option } = event.target.closest('button').dataset;
    this.removeOption(option);
    this.updateMenuState(false);
    this.requestUpdate();
  }

  handleInputFocus() {
    this.updateMenuState(true);
  }

  handleInputKeydown(event) {
    const max = Object.keys(this.filteredOptions).length - 1;
    const action = this.getActionFromKey(event, this.open);

    switch (action) {
      case this.MenuActions.Next:
      case this.MenuActions.Last:
      case this.MenuActions.First:
      case this.MenuActions.Previous:
        event.preventDefault();
        return this.updateIndex(
          this.getUpdatedIndex(this.activeIndex, max, action)
        );
      case this.MenuActions.CloseSelect:
        event.preventDefault();
        return this.updateOption(this.activeIndex);
      case this.MenuActions.Close:
        event.preventDefault();
        return this.updateMenuState(false);
      case this.MenuActions.Open:
        return this.updateMenuState(true);
      default:
        return false;
    }
  }

  handleInput(event) {
    if (!this.open) {
      this.open = true;
    }

    const filterString = event.target.value.toLowerCase().trim();

    this.filteredOptions = {};
    for (const [key, value] of Object.entries(this.options)) {
      const v = value.toLowerCase();
      if (v.indexOf(filterString) === 0) {
        this.filteredOptions[key] = value;
      }
    }
  }

  handleOptionClick(event) {
    const { option } = event.target.closest('.combo-option').dataset;
    if (this.selectedOptions.indexOf(option) > -1) {
      this.removeOption(option);
    } else {
      this.addOption(option);
    }
    this.requestUpdate();
  }

  getActionFromKey(event, menuOpen) {
    const { key, altKey, ctrlKey, metaKey } = event;
    const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' ', 'Home', 'End'];

    if (!menuOpen && openKeys.includes(key)) {
      return this.MenuActions.Open;
    }

    if (
      key === this.Keys.Backspace ||
      key === this.Keys.Clear ||
      (key.length === 1 && key !== ' ' && !altKey && !ctrlKey && !metaKey)
    ) {
      return this.MenuActions.Type;
    }

    if (menuOpen) {
      if ((key === this.Keys.Down && !altKey) || key === this.Keys.Right) {
        return this.MenuActions.Next;
      }
      if (key === this.Keys.Up && altKey) {
        return this.MenuActions.CloseSelect;
      }
      if (key === this.Keys.Up || key === this.Keys.Left) {
        return this.MenuActions.Previous;
      }
      if (key === this.Keys.Home) {
        return this.MenuActions.First;
      }
      if (key === this.Keys.End) {
        return this.MenuActions.Last;
      }
      if (key === this.Keys.PageUp) {
        return this.MenuActions.PageUp;
      }
      if (key === this.Keys.PageDown) {
        return this.MenuActions.PageDown;
      }
      if (key === this.Keys.Escape) {
        return this.MenuActions.Close;
      }
      if (key === this.Keys.Enter) {
        return this.MenuActions.CloseSelect;
      }
      if (key === this.Keys.Space) {
        return this.MenuActions.Space;
      }
    }

    return false;
  }

  updateOption(index) {
    const option = Object.keys(this.filteredOptions)[index];

    if (option) {
      if (this.selectedOptions.indexOf(option) > -1) {
        this.removeOption(option);
        this.value = '';
      } else {
        this.addOption(option);
        this.value = '';
        this.filteredOptions = this.options;
        this.activeIndex = Object.keys(this.filteredOptions).indexOf(option);
      }

      this.requestUpdate();
    }
  }
}
