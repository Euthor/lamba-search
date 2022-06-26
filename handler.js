'use strict';

const path = require('path')
const fs = require('fs')
const fuzz = require('fuzzball')

const MAX_RESULTS = 100
const CUTOFF = 75

module.exports.search = async (name, context) => {
  const listFilePath = path.resolve(__dirname, 'lib/list.json')
  const listFile = await fs.promises.readFile(listFilePath, 'utf8')
  const list = JSON.parse(listFile)

  const scorer = (name, listItem) => fuzz.ratio(listItem.name, name)

  const results = await fuzz.extractAsPromised(name, list, {
    scorer: scorer,
    limit: MAX_RESULTS,
    cutoff: CUTOFF
  })

  return results.map(result => ({
    itemId: result[0].id,
    score: result[1]
  }))
}
