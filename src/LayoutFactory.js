import * as Layouts from './layouts'

class LayoutFactory {
  constructor() {
    this.layoutMap = new Map();
    this.layoutMap.set('{B4A8C4CD-EB58-4C7F-A779-64659FD3DD4B}', Layouts.TestLayout.Layout);
    this.layoutMap.set('default', Layouts.DefaultLayout.Layout);
  }

  resolveLayout(routeData) {
    const layoutId = `{${routeData.layoutId.toUpperCase()}}`;
    const layout = this.layoutMap.get(layoutId);

    return layout || this.layoutMap.get('default');
  }
}

const layoutFactory = new LayoutFactory();

Object.freeze(layoutFactory);
export default layoutFactory;
