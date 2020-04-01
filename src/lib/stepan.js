import StepanError from './stepanError.js'

export default class Stepan {
  static isValidTagName(tagName) {
      const validTagNames = "a abbr acronym address applet area article aside audio b base basefont bdi bdo big blockquote body br button canvas caption center cite code col colgroup data datalist dd del details dfn dialog dir div dl dt em embed fieldset figcaption figure font footer form frame frameset h1 h2 h3 h4 h5 h6 header hr html i iframe img input ins kbd label legend li link main map mark meta meter nav noframes noscript ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strike strong style sub summary sup svg table tbody td template textarea tfoot th thead time title tr track tt u ul var video wbr"
      if (validTagNames.indexOf(tagName) != -1) 
        return true;
      return false;
  }

  static createElement(element, parent, attributes = {}) {
    if (!this.isValidTagName(element)) {
        throw new StepanError("! invalid tag name");
    }
    else {
      const newElement = document.createElement(element);

      const { innerHTML, innerText } = attributes;

      for (let attribute in attributes) {
        if (['innerHTML', 'innerText'].includes(attribute)) {
          continue;
        }

        newElement.setAttribute(attribute, attributes[attribute]);
      }

      innerHTML && (newElement.innerHTML = innerHTML);
      innerText && (newElement.innerText = innerText);

      parent.appendChild(newElement);

      return newElement;
    }
  }

  static Component = class {
    constructor(parent) {
      if (typeof(parent) === "null" || typeof(parent) === "undefined") {
        let parentType = "null";
        if (typeof(parent) === "undefined") 
          parentType = "undefined";
        throw new StepanError("! " + parentType + " parent element");
      }
      if (! parent instanceof HTMLElement) {
        throw new StepanError("! invalid DOM object");
      }
      this.parent = parent;
    }
    
    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}
