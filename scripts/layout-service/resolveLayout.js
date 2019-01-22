const resolveLayout = (context, route) => {
  var layout = {
    // We define the layout name in the layoutName property of the route file.
    name: route.layoutName, 
    id: 'available-in-connected-mode'
  }
  return {
    ...context,
    layout
  };
};

exports.resolveLayout = resolveLayout;