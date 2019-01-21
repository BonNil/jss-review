import Layouts from '../../../src/layouts/metadata.js';

// This function is invoked by JSS convention:
// ./sitecore/pipelines/**/*.patch.js are automatically invoked when pipelines are initializing.
export const config = (pipelines) => {
  const pipeline = pipelines.getPipeline('generateManifest');
  pipeline.addProcessor({
    name: 'generateLayouts',
    process: function (args) {
      console.log('inline process patch: generateLayouts');

      const finalLayouts = [];
      for (var key in Layouts){
        finalLayouts.push(Layouts[key]);
      }

      return {
        ...args,
        pipelineResult: {
          ...args.pipelineResult,
          layouts: finalLayouts
        },
      };
    }
  })
}
