import * as layouts from './layouts'

class LayoutFactory {
  constructor() {
    console.log('layoutfactory constructed!');

    this.layoutMap = {
      B4A8C4CDEB584C7FA77964659FD3DD4B: layouts.TestLayout,
      default: layouts.DefaultLayout
    }
  }

  resolveLayout(routeData) {
    var layoutId = this.washId(routeData.layoutId);
    var layout = this.layoutMap[layoutId];

    return layout || this.layoutMap.default;
  }

  washId(id) {
    return id.replace(/[[\]{}\-']+/g, '').toUpperCase();
  }
}

const layoutFactory = new LayoutFactory();

Object.freeze(layoutFactory);
export default layoutFactory;
