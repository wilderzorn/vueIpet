// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  '../components/',
  // Do not look in subdirectories
  true,// 是否找子文件
  // Only include "_base-" prefixed .vue files
  /[\w-]+\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = upperFirst(
    camelCase(
      fileName
        // Remove the "./_" from the beginning
        .replace(/^\.\/_/, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
    )
<<<<<<< HEAD
    // Globally register the component
    // console.log(componentName)
    Vue.component(componentName, componentConfig.default || componentConfig)
=======
  )
  // Globally register the component
  // console.log(componentName);
  Vue.component(componentName, componentConfig.default || componentConfig)
>>>>>>> 6666cb7bba96d5931c40275393bcfce18a8213f3
})