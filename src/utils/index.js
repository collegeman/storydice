// @see https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i
const reqSvgs = require.context('../assets/openmoji-svg-color', true, /\.svg$/)
const svgs = reqSvgs.keys().reduce((images, path) => {
  images[path] = reqSvgs(path)
  return images
}, {})
// cache of SVG source
let source = {}
/**
 * Get a Promise for the SVG content for the given ID
 * @param id
 * @returns {Promise<any>}
 */
export const svg = (id) => new Promise((resolve) => {
  id = id ? id.toUpperCase() : null
  if (source[id]) {
    resolve(source[id])
  }
  let ajax = new XMLHttpRequest()
  ajax.open("GET", svgs['./' + id + '.svg'], true)
  ajax.send();
  ajax.onload = function() {
    source[id] = ajax.responseText.replace('<svg', '<svg width="100" height="100"')
    resolve(source[id])
  }
})