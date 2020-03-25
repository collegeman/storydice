const reqSvgs = require.context('../assets/openmoji-svg-color', true, /\.svg$/)
const svgs = reqSvgs.keys().reduce((images, path) => {
  images[path] = reqSvgs(path)
  return images
}, {})

let source = {}


export const loadSvg = (id) => new Promise((resolve) => {
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