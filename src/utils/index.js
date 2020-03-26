// @see https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i
const reqSvgs = require.context('../assets/openmoji-svg-color', true, /\.svg$/)
const svgs = reqSvgs.keys().reduce((images, path) => {
  images[path] = reqSvgs(path)
  return images
}, {})
// cache of SVG source
const source = {}
// bad id icon is a pink box with an "X" through it
export const badIdIcon = '25A1'
// default icon is a plus button
export const defaultIcon = 'E25F'

import openemoji from '@/assets/openmoji.json'
import lunr from 'lunr'

export const library = {}
export const index = lunr(function () {
  let lunr = this
  lunr.ref('hexcode')
  lunr.field('group')
  lunr.field('annotation')
  lunr.field('tags')
  lunr.field('openmoji_tags')
  lunr.field('openmoji_author')
  lunr.field('skintone')
  for (let icon of openemoji) {
    if (!library[icon.group]) {
      library[icon.group] = []
    }
    library[icon.group].push(icon)
    lunr.add(icon)
  }
})

/**
 * Get the image URL for a given hexcode ID
 * @param id
 * @returns string
 */
export const getUrl = (id) => {
  return svgs['./' + id + '.svg']
}

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
  let url = getUrl(id)
  if (!url) {
    svg(badIdIcon).then(xml => resolve(xml))
  } else {
    let ajax = new XMLHttpRequest()
    ajax.open("GET", url, true)
    ajax.send();
    ajax.onload = function () {
      if (ajax.status >= 300) {
        svg(badIdIcon).then(xml => resolve(xml))
      } else {
        let xml = ajax.responseText.replace('<svg', '<svg width="100" height="100"')
        source[id] = xml
        resolve(xml)
      }
    }
  }
})
