import LayoutMap from './temp/layoutMap.js'

class LayoutFactory {
  constructor() {
    this.layoutMap = LayoutMap;
  }

  resolveLayout(contextData) {;
    const layoutName = contextData.layout.name;
    const layout = this.layoutMap.get(layoutName);

    return layout || this.layoutMap.get('default');
  }
}

const layoutFactory = new LayoutFactory();

Object.freeze(layoutFactory);
export default layoutFactory;
